<?php

namespace App\Controller;

use App\Form\ImagineType;
use App\Imagine\Imagine;
use Liip\ImagineBundle\Imagine\Filter\FilterManager;
use Liip\ImagineBundle\Model\Binary;
use Mimey\MimeMappingBuilder;
use Mimey\MimeTypes;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class AppController extends AbstractController
{
    public function index()
    {
        return new Response('');
    }

    public function resize(Request $request, FilterManager $filterManager)
    {
        $form = $this->createForm(ImagineType::class);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();
            $file = $form->get('image')->getData();

            $this->registerShutdownFunction($file->getPathname());
            try {
                return $this->innerResize($filterManager, $file->getFilename(), $data['filter'], file_get_contents($file->getPathname()));
            } catch (BadRequestHttpException $e) {
                return new JsonResponse(['message' => $e->getMessage()], 400);
            }
        }

        $errors = [];
        foreach ($form->getErrors(true) as $error) {
            $errors['message'][$error->getOrigin()->getName()] = $error->getMessage();
        }

        if (empty($errors)) {
            $errors['message'] = 'Invalid form data';
        }

        return new JsonResponse($errors, 400);
    }

    private function registerShutdownFunction($file_path)
    {
        register_shutdown_function(function ($file_path) {
            @unlink($file_path); // remove tmp file from local filesystem
        }, $file_path);
    }

    private function innerResize(FilterManager $filterManager, $name, $filter, $mediaBinary): Response
    {
        if ($filter == Imagine::ORIGINAL_FILTER_NAME) {
            return $this->getOriginalMediaResponse($mediaBinary, $name);
        }

        $imagine = $this->getImagine($mediaBinary, $filter);
        if (!in_array($imagine->getMimeType(), Imagine::resizeableMimeTypes())) {
            return $this->getOriginalMediaResponse($mediaBinary, $name);
        }

        $configuration = $filterManager->getFilterConfiguration()->get('default');
        $configuration = $this->setCustomConfiguration($configuration, $imagine);
        $filterManager->getFilterConfiguration()->set($filter, $configuration);

        if ($imagine->getCropType() == Imagine::BASIC_CROP_TYPE && $imagine->getIw() > $imagine->getImageWidth() && ($imagine->getIh() == "any" || $imagine->getIh() == "*")) {
            return $this->getResponse($mediaBinary, $imagine->getMimeType());
        }

        $binary = new Binary($mediaBinary, $imagine->getMimeType(), $this->getExtensionByMimeType($imagine->getMimeType()));
        $binary = $filterManager->applyFilter($binary, $filter);

        return $this->getResponse($binary->getContent(), $imagine->getMimeType());
    }

    private function getImagine($mediaBinary, $filter): Imagine
    {
        $filter = strtolower($filter);
        $mediaInfo = getimagesizefromstring($mediaBinary);

        parse_str($filter, $output);
        $output = Imagine::normalizeOutput($output);

        return (new Imagine())
            ->setMimeType($mediaInfo['mime'] ?? '')
            ->setImageWidth($mediaInfo[0] ?? 0)
            ->setImageHeight($mediaInfo[1] ?? 0)
            ->setIw($output['iw'] ?? 0)
            ->setIh($output['ih'] ?? 0)
            ->setOx($output['ox'] ?? 0)
            ->setOy($output['oy'] ?? 0)
            ->setCh($output['ch'] ?? 0)
            ->setCw($output['cw'] ?? 0)
            ->setCropType($this->getCropType($filter));
    }

    private function setCustomConfiguration(array $configuration, Imagine $imagine): array
    {
        $configuration['filters']['crop_filter_loader']['mimeType'] = $imagine->getMimeType();
        $configuration['filters']['crop_filter_loader']['originalSize'] = [$imagine->getImageWidth(), $imagine->getImageHeight()];
        $configuration['filters']['crop_filter_loader']['requestedData']['imageWidth'] = $imagine->getIw();
        $configuration['filters']['crop_filter_loader']['requestedData']['imageHeight'] = $imagine->getIh();
        switch ($imagine->getCropType()) {
            case Imagine::BASIC_CROP_TYPE:
                $configuration['filters']['crop_filter_loader']['is_advanced'] = false;
                break;
            case Imagine::ADVANCED_CROP_TYPE:
                $configuration['filters']['crop_filter_loader']['requestedData']['offsetX'] = $imagine->getOx();
                $configuration['filters']['crop_filter_loader']['requestedData']['offsetY'] = $imagine->getOy();
                $configuration['filters']['crop_filter_loader']['requestedData']['cropWidth'] = $imagine->getCw();
                $configuration['filters']['crop_filter_loader']['requestedData']['cropHeight'] = $imagine->getCh();
                $configuration['filters']['crop_filter_loader']['is_advanced'] = true;
                break;
        }

        return $configuration;
    }

    private function getExtensionByMimeType($mimeType): string
    {
        $builder = MimeMappingBuilder::create();
        $mimes = new MimeTypes($builder->getMapping());
        return $mimes->getExtension($mimeType);
    }

    private function getCropType($filter): int
    {
        if (preg_match(Imagine::BASIC_FILTER_PATTERN, $filter)) {
            return Imagine::BASIC_CROP_TYPE;
        } elseif (preg_match(Imagine::ADVANCED_FILTER_PATTERN, $filter)) {
            return Imagine::ADVANCED_CROP_TYPE;
        } else {
            throw new BadRequestHttpException("Invalid size format.");
        }
    }

    private function getResponse($content, $content_type): Response
    {
        return new Response($content, 200, [
            'Content-Type' => $content_type,
            'Content-Length' => strlen($content),
            'Cache-Control' => Imagine::CACHE_CONTROL_RESPONSE_HEADER_VALUE
        ]);
    }

    private function getOriginalMediaResponse($mediaBinary, $unique_name): Response
    {
        $path_parts = pathinfo($unique_name);
        if (!isset($path_parts['extension']) || $path_parts['extension'] == '') {
            throw new BadRequestHttpException('Invalid file name');
        }

        return $this->getResponse($mediaBinary, (new MimeTypes())->getMimeType($path_parts['extension']));
    }

    public function media(FilterManager $filterManager, $filter, $uid, $canonical_name)
    {
        $path_parts = pathinfo($canonical_name);
        if (!isset($path_parts['extension']) || $path_parts['extension'] == '') {
            throw new BadRequestHttpException('Invalid file name');
        }

        $unique_name = $uid . '.' . $path_parts['extension'];
        $mediaBinary = $this->getMediaBinary($unique_name);

        return $this->innerResize($filterManager, $canonical_name, $filter, $mediaBinary);
    }

    private function getMediaBinary($unique_name): string
    {
        $mediaBinary = @file_get_contents($this->getParameter('brizy_default_media_url') . '/' . $unique_name);
        if (!$mediaBinary) {
            throw new NotFoundHttpException('Media was not found');
        }

        return $mediaBinary;
    }
}
