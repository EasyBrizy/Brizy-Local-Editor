<?php

namespace App\Form;

use App\Imagine\Imagine;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\Validator\Constraints\NotBlank;

class ImagineType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('filter', TextType::class, [
                'constraints' => [
                    new NotBlank()
                ]
            ])
            ->add('image', FileType::class, [
                'constraints' => [
                    new File([
                        'mimeTypes' => Imagine::resizeableMimeTypes(),
                        'mimeTypesMessage' => 'Please upload a valid image. Allowed only ' . implode(',', Imagine::resizeableMimeTypes()),
                    ]),
                    new NotBlank()
                ],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => null
        ]);
    }

    public function getBlockPrefix()
    {
        return '';
    }
}