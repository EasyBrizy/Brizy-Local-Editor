<?php

namespace App\Imagine;

class Imagine
{
    const BASIC_CROP_TYPE    = 1;
    const ADVANCED_CROP_TYPE = 2;

    const CACHE_CONTROL_RESPONSE_HEADER_VALUE = 'max-age=31104000, public';

    const ORIGINAL_FILTER_NAME = 'original';

    const ADVANCED_FILTER_PATTERN = '/^iW=[0-9]{1,4}&iH=[0-9]{1,4}&oX=[0-9]{1,4}&oY=[0-9]{1,4}&cW=[0-9]{1,4}&cH=[0-9]{1,4}$/is';
    const BASIC_FILTER_PATTERN = '/^iW=[0-9]{1,4}&iH=([0-9]{1,4}|any|\*{1})$/is';

    /**
     * @var string
     */
    private $mimeType;

    /**
     * @var string
     */
    private $imageWidth;

    /**
     * @var string
     */
    private $imageHeight;

    /**
     * @var string
     */
    private $iw;

    /**
     * @var string
     */
    private $ih;

    /**
     * @var string
     */
    private $ox;

    /**
     * @var string
     */
    private $oy;

    /**
     * @var string
     */
    private $cw;

    /**
     * @var string
     */
    private $ch;

    /**
     * @var int
     */
    private $cropType;

    /**
     * @return string
     */
    public function getMimeType(): string
    {
        return $this->mimeType;
    }

    /**
     * @param string $mimeType
     * @return $this
     */
    public function setMimeType(string $mimeType): Imagine
    {
        $this->mimeType = $mimeType;

        return $this;
    }

    /**
     * @return string
     */
    public function getImageWidth(): string
    {
        return $this->imageWidth;
    }

    /**
     * @param string $imageWidth
     * @return $this
     */
    public function setImageWidth(string $imageWidth): Imagine
    {
        $this->imageWidth = $imageWidth;

        return $this;
    }

    /**
     * @return string
     */
    public function getImageHeight(): string
    {
        return $this->imageHeight;
    }

    /**
     * @param string $imageHeight
     * @return $this
     */
    public function setImageHeight(string $imageHeight): Imagine
    {
        $this->imageHeight = $imageHeight;

        return $this;
    }

    /**
     * @return string
     */
    public function getIw(): string
    {
        return $this->iw;
    }

    /**
     * @param string $iw
     * @return $this
     */
    public function setIw(string $iw): Imagine
    {
        $this->iw = $iw;

        return $this;
    }

    /**
     * @return string
     */
    public function getIh(): string
    {
        return $this->ih;
    }

    /**
     * @param string $ih
     * @return $this
     */
    public function setIh(string $ih): Imagine
    {
        $this->ih = $ih;

        return $this;
    }

    /**
     * @return string
     */
    public function getOx(): string
    {
        return $this->ox;
    }

    /**
     * @param string $ox
     * @return $this
     */
    public function setOx(string $ox): Imagine
    {
        $this->ox = $ox;

        return $this;
    }

    /**
     * @return string
     */
    public function getOy(): string
    {
        return $this->oy;
    }

    /**
     * @param string $oy
     * @return $this
     */
    public function setOy(string $oy): Imagine
    {
        $this->oy = $oy;

        return $this;
    }

    /**
     * @return string
     */
    public function getCh(): string
    {
        return $this->ch;
    }

    /**
     * @param string $ch
     * @return $this
     */
    public function setCh(string $ch): Imagine
    {
        $this->ch = $ch;

        return $this;
    }

    /**
     * @return string
     */
    public function getCw(): string
    {
        return $this->cw;
    }

    /**
     * @param string $cw
     * @return $this
     */
    public function setCw(string $cw): Imagine
    {
        $this->cw = $cw;

        return $this;
    }

    /**
     * @return int
     */
    public function getCropType(): int
    {
        return $this->cropType;
    }

    /**
     * @param int $cropType
     * @return $this
     */
    public function setCropType(int $cropType): Imagine
    {
        $this->cropType = $cropType;

        return $this;
    }

    static public function resizeableMimeTypes(): array
    {
        return [
            "image/pjpeg",
            "image/jpeg",
            "image/png",
            "image/x-png"
        ];
    }

    static public function normalizeOutput($output)
    {
        foreach ($output as $key => $value) {
            if ($key != 'ox' && $key != 'oy' && $value != "any" && $value != "*" && $value < 1) {
                $output[$key] = 1;
            }
        }

        return $output;
    }
}

