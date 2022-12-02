<?php

namespace App\Imagine\Filter\Loader;

use Imagine\Filter\Basic\Crop;
use Imagine\Image\Box;
use Imagine\Image\ImageInterface;
use Imagine\Image\Point;
use Liip\ImagineBundle\Imagine\Filter\Loader\LoaderInterface;
use Liip\ImagineBundle\Imagine\Filter\RelativeResize;

/**
 * Class CropFilterLoader
 * @package AppBundle\Filter\Loader
 */
class CropFilterLoader implements LoaderInterface
{
    /**
     * {@inheritDoc}
     */
    public function load(ImageInterface $image, array $options = array()): ImageInterface
    {
        if ($options['is_advanced'] === false) {
            list($imageWidth, $imageHeight) = array_values($options['requestedData']);
            return $this->relativeResize($image, $imageWidth, $imageHeight);
        }

        list($imageWidth, $imageHeight, $offsetX, $offsetY, $cropWidth, $cropHeight) = array_values($options['requestedData']);

        $image = $this->relativeResize($image, $imageWidth, $imageHeight);
        $filter = new Crop(new Point($offsetX, $offsetY), new Box($cropWidth, $cropHeight));

        return $filter->apply($image);
    }

    private function relativeResize($image, $imageWidth, $imageHeight): ImageInterface
    {
        $filter = new RelativeResize("widen", $imageWidth);
        return $filter->apply($image);
    }
}
