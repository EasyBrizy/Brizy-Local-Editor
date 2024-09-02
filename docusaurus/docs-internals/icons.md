---
sidebar_position: 5
toc_max_heading_level: 4
---

# Icons

import { SvgComponent } from '@site/src/components/SvgComponent';

#### Usage

To specify which `icon` you want to include in the control, pass the icon's name to the icon parameter in the control definition.<br/>
Example:

```ts
{
  id: "test",
  type: "switch",
  icon: "nc-settings"
}
```

Each icon has a unique name, and this name should be provided as the value for the `icon` parameter. Make sure to use the correct icon name from the available icon set below to ensure the desired icon is displayed in the control.

### List of available icons

<table>
    <tr>
        <td>
            <SvgComponent icon="nc-play" />
        </td>
        <td>
            <SvgComponent icon="nc-bold" />
        </td>
        <td>
            <SvgComponent icon="nc-h1" />
        </td>
        <td>
            <SvgComponent icon="nc-h2" />
        </td>
        <td>
            <SvgComponent icon="nc-h3" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-h4" />
        </td>
        <td>
            <SvgComponent icon="nc-italic" />
        </td>
        <td>
            <SvgComponent icon="nc-list-bullet" />
        </td>
        <td>
            <SvgComponent icon="nc-list-default" />
        </td>
        <td>
            <SvgComponent icon="nc-list-numbers" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-p" />
        </td>
        <td>
            <SvgComponent icon="nc-text-align-justify" />
        </td>
        <td>
            <SvgComponent icon="nc-add" />
        </td>
        <td>
            <SvgComponent icon="nc-align-bottom" />
        </td>
        <td>
            <SvgComponent icon="nc-align-middle" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-align-top" />
        </td>
        <td>
            <SvgComponent icon="nc-duplicate" />
        </td>
        <td>
            <SvgComponent icon="nc-pin" />
        </td>
        <td>
            <SvgComponent icon="nc-dashed" />
        </td>
        <td>
            <SvgComponent icon="nc-dotted" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-solid" />
        </td>
        <td>
            <SvgComponent icon="nc-iframe" />
        </td>
        <td>
            <SvgComponent icon="nc-align-left" />
        </td>
        <td>
            <SvgComponent icon="nc-align-right" />
        </td>
        <td>
            <SvgComponent icon="nc-arrow-right" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-brush" />
        </td>
        <td>
            <SvgComponent icon="nc-circle" />
        </td>
        <td>
            <SvgComponent icon="nc-corners-round" />
        </td>
        <td>
            <SvgComponent icon="nc-corners-square" />
        </td>
        <td>
            <SvgComponent icon="nc-cube" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-font" />
        </td>
        <td>
            <SvgComponent icon="nc-link" />
        </td>
        <td>
            <SvgComponent icon="nc-more" />
        </td>
        <td>
            <SvgComponent icon="nc-outline" />
        </td>
        <td>
            <SvgComponent icon="nc-pen" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-plus" />
        </td>
        <td>
            <SvgComponent icon="nc-search" />
        </td>
        <td>
            <SvgComponent icon="nc-star" />
        </td>
        <td>
            <SvgComponent icon="nc-text-align-center" />
        </td>
        <td>
            <SvgComponent icon="nc-text-align-left" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-text-align-right" />
        </td>
        <td>
            <SvgComponent icon="nc-upload" />
        </td>
        <td>
            <SvgComponent icon="nc-check" />
        </td>
        <td>
            <SvgComponent icon="nc-cog" />
        </td>
        <td>
            <SvgComponent icon="nc-hover" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-image" />
        </td>
        <td>
            <SvgComponent icon="nc-remove" />
        </td>
        <td>
            <SvgComponent icon="nc-settings" />
        </td>
        <td>
            <SvgComponent icon="nc-trash" />
        </td>
        <td>
            <SvgComponent icon="nc-uncheck" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-button-2" />
        </td>
        <td>
            <SvgComponent icon="nc-button" />
        </td>
        <td>
            <SvgComponent icon="nc-desktop" />
        </td>
        <td>
            <SvgComponent icon="nc-divider" />
        </td>
        <td>
            <SvgComponent icon="nc-lock" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-menu" />
        </td>
        <td>
            <SvgComponent icon="nc-phone" />
        </td>
        <td>
            <SvgComponent icon="nc-reorder" />
        </td>
        <td>
            <SvgComponent icon="nc-spacer" />
        </td>
        <td>
            <SvgComponent icon="nc-tablet" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-unlock" />
        </td>
        <td>
            <SvgComponent icon="nc-upgrade" />
        </td>
        <td>
            <SvgComponent icon="nc-close" />
        </td>
        <td>
            <SvgComponent icon="nc-corners-all" />
        </td>
        <td>
            <SvgComponent icon="nc-corners-bottom-right" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-corners-bottom-left" />
        </td>
        <td>
            <SvgComponent icon="nc-corners-individual" />
        </td>
        <td>
            <SvgComponent icon="nc-corners-top-left" />
        </td>
        <td>
            <SvgComponent icon="nc-corners-top-right" />
        </td>
        <td>
            <SvgComponent icon="nc-horizontal" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-redo" />
        </td>
        <td>
            <SvgComponent icon="nc-size" />
        </td>
        <td>
            <SvgComponent icon="nc-styling-all" />
        </td>
        <td>
            <SvgComponent icon="nc-styling-bottom" />
        </td>
        <td>
            <SvgComponent icon="nc-styling-individual" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-styling-left" />
        </td>
        <td>
            <SvgComponent icon="nc-styling-right" />
        </td>
        <td>
            <SvgComponent icon="nc-styling-top" />
        </td>
        <td>
            <SvgComponent icon="nc-styling" />
        </td>
        <td>
            <SvgComponent icon="nc-time" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-undo" />
        </td>
        <td>
            <SvgComponent icon="nc-vertical" />
        </td>
        <td>
            <SvgComponent icon="nc-check-small" />
        </td>
        <td>
            <SvgComponent icon="nc-circle-remove" />
        </td>
        <td>
            <SvgComponent icon="nc-stre-down" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-stre-up" />
        </td>
        <td>
            <SvgComponent icon="nc-alert-circle-que" />
        </td>
        <td>
            <SvgComponent icon="nc-grid-45" />
        </td>
        <td>
            <SvgComponent icon="nc-bars" />
        </td>
        <td>
            <SvgComponent icon="nc-square-remove-09" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-paragraph" />
        </td>
        <td>
            <SvgComponent icon="nc-zoom-e" />
        </td>
        <td>
            <SvgComponent icon="nc-hourglass" />
        </td>
        <td>
            <SvgComponent icon="nc-share-2" />
        </td>
        <td>
            <SvgComponent icon="nc-form" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-circle-remove-2" />
        </td>
        <td>
            <SvgComponent icon="nc-eye-ban-18" />
        </td>
        <td>
            <SvgComponent icon="nc-eye-17" />
        </td>
        <td>
            <SvgComponent icon="nc-drag" />
        </td>
        <td>
            <SvgComponent icon="nc-small" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-medium" />
        </td>
        <td>
            <SvgComponent icon="nc-large" />
        </td>
        <td>
            <SvgComponent icon="nc-16" />
        </td>
        <td>
            <SvgComponent icon="nc-24" />
        </td>
        <td>
            <SvgComponent icon="nc-32" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-48" />
        </td>
        <td>
            <SvgComponent icon="nc-64" />
        </td>
        <td>
            <SvgComponent icon="nc-row" />
        </td>
        <td>
            <SvgComponent icon="nc-column" />
        </td>
        <td>
            <SvgComponent icon="nc-sound-cloud" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-counter" />
        </td>
        <td>
            <SvgComponent icon="nc-shortcode" />
        </td>
        <td>
            <SvgComponent icon="nc-sidebar" />
        </td>
        <td>
            <SvgComponent icon="nc-dark" />
        </td>
        <td>
            <SvgComponent icon="nc-light" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-wp-shortcode" />
        </td>
        <td>
            <SvgComponent icon="nc-sndcloud-style-1" />
        </td>
        <td>
            <SvgComponent icon="nc-sndcloud-style-2" />
        </td>
        <td>
            <SvgComponent icon="nc-circle-outline" />
        </td>
        <td>
            <SvgComponent icon="nc-diamond-outline" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-dot" />
        </td>
        <td>
            <SvgComponent icon="nc-fade" />
        </td>
        <td>
            <SvgComponent icon="nc-line" />
        </td>
        <td>
            <SvgComponent icon="nc-none" />
        </td>
        <td>
            <SvgComponent icon="nc-right-arrow-filled" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-right-arrow-heavy" />
        </td>
        <td>
            <SvgComponent icon="nc-right-arrow-outline" />
        </td>
        <td>
            <SvgComponent icon="nc-right-arrow-tail" />
        </td>
        <td>
            <SvgComponent icon="nc-right-arrow-thin" />
        </td>
        <td>
            <SvgComponent icon="nc-slider-horizontal" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-slider-vertical" />
        </td>
        <td>
            <SvgComponent icon="nc-slider" />
        </td>
        <td>
            <SvgComponent icon="nc-square-outline" />
        </td>
        <td>
            <SvgComponent icon="nc-align-horizontal" />
        </td>
        <td>
            <SvgComponent icon="nc-align-vertical" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-label-inside" />
        </td>
        <td>
            <SvgComponent icon="nc-label-outside" />
        </td>
        <td>
            <SvgComponent icon="nc-info" />
        </td>
        <td>
            <SvgComponent icon="nc-back" />
        </td>
        <td>
            <SvgComponent icon="nc-countdown" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-counter-outline" />
        </td>
        <td>
            <SvgComponent icon="nc-form-left" />
        </td>
        <td>
            <SvgComponent icon="nc-full-cube" />
        </td>
        <td>
            <SvgComponent icon="nc-save-section" />
        </td>
        <td>
            <SvgComponent icon="nc-extensions" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-failure" />
        </td>
        <td>
            <SvgComponent icon="nc-check-color" />
        </td>
        <td>
            <SvgComponent icon="nc-success" />
        </td>
        <td>
            <SvgComponent icon="nc-brizy-logo-outline" />
        </td>
        <td>
            <SvgComponent icon="nc-brizy-logo" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-circle-02" />
        </td>
        <td>
            <SvgComponent icon="nc-tabs" />
        </td>
        <td>
            <SvgComponent icon="nc-update" />
        </td>
        <td>
            <SvgComponent icon="nc-background" />
        </td>
        <td>
            <SvgComponent icon="nc-woo" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-toggle" />
        </td>
        <td>
            <SvgComponent icon="nc-sticky-menu" />
        </td>
        <td>
            <SvgComponent icon="nc-img" />
        </td>
        <td>
            <SvgComponent icon="nc-banner" />
        </td>
        <td>
            <SvgComponent icon="nc-down" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-up" />
        </td>
        <td>
            <SvgComponent icon="nc-woo-2" />
        </td>
        <td>
            <SvgComponent icon="nc-block-switch" />
        </td>
        <td>
            <SvgComponent icon="nc-extensions-2" />
        </td>
        <td>
            <SvgComponent icon="nc-global" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-arrow-left" />
        </td>
        <td>
            <SvgComponent icon="nc-blur" />
        </td>
        <td>
            <SvgComponent icon="nc-dynamic" />
        </td>
        <td>
            <SvgComponent icon="nc-bug" />
        </td>
        <td>
            <SvgComponent icon="nc-page" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-blocks" />
        </td>
        <td>
            <SvgComponent icon="nc-pages" />
        </td>
        <td>
            <SvgComponent icon="nc-popup" />
        </td>
        <td>
            <SvgComponent icon="nc-gallery" />
        </td>
        <td>
            <SvgComponent icon="nc-dynamic-img" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-dynamic-text" />
        </td>
        <td>
            <SvgComponent icon="nc-brightness" />
        </td>
        <td>
            <SvgComponent icon="nc-carousel" />
        </td>
        <td>
            <SvgComponent icon="nc-contrast" />
        </td>
        <td>
            <SvgComponent icon="nc-flip-horizontal" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-flip-vertical" />
        </td>
        <td>
            <SvgComponent icon="nc-hue" />
        </td>
        <td>
            <SvgComponent icon="nc-menu-3" />
        </td>
        <td>
            <SvgComponent icon="nc-reset" />
        </td>
        <td>
            <SvgComponent icon="nc-saturation" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-close-popup" />
        </td>
        <td>
            <SvgComponent icon="nc-width" />
        </td>
        <td>
            <SvgComponent icon="nc-height" />
        </td>
        <td>
            <SvgComponent icon="nc-repeat" />
        </td>
        <td>
            <SvgComponent icon="nc-send-to-back" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-bring-to-top" />
        </td>
        <td>
            <SvgComponent icon="nc-check-light" />
        </td>
        <td>
            <SvgComponent icon="nc-pen" />
        </td>
        <td>
            <SvgComponent icon="nc-media-image" />
        </td>
        <td>
            <SvgComponent icon="nc-media-video" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-media-map" />
        </td>
        <td>
            <SvgComponent icon="nc-email" />
        </td>
        <td>
            <SvgComponent icon="nc-captcha" />
        </td>
        <td>
            <SvgComponent icon="nc-uncheck-alt" />
        </td>
        <td>
            <SvgComponent icon="nc-check-alt" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-shift-key" />
        </td>
        <td>
            <SvgComponent icon="nc-reverse-columns-bottom" />
        </td>
        <td>
            <SvgComponent icon="nc-reverse-columns-left" />
        </td>
        <td>
            <SvgComponent icon="nc-reverse-columns-right" />
        </td>
        <td>
            <SvgComponent icon="nc-reverse-columns-top" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-minus" />
        </td>
        <td>
            <SvgComponent icon="nc-facebook" />
        </td>
        <td>
            <SvgComponent icon="nc-footer" />
        </td>
        <td>
            <SvgComponent icon="nc-dividers-bottom" />
        </td>
        <td>
            <SvgComponent icon="nc-dividers-top" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-plus2" />
        </td>
        <td>
            <SvgComponent icon="nc-arrow" />
        </td>
        <td>
            <SvgComponent icon="nc-shadow" />
        </td>
        <td>
            <SvgComponent icon="nc-combined-shape" />
        </td>
        <td>
            <SvgComponent icon="nc-connection" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-check-circle" />
        </td>
        <td>
            <SvgComponent icon="nc-reverse" />
        </td>
        <td>
            <SvgComponent icon="nc-switch" />
        </td>
        <td>
            <SvgComponent icon="nc-triggers" />
        </td>
        <td>
            <SvgComponent icon="nc-progress-bar" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-preview" />
        </td>
        <td>
            <SvgComponent icon="nc-plus3" />
        </td>
        <td>
            <SvgComponent icon="nc-hrz-align-left" />
        </td>
        <td>
            <SvgComponent icon="nc-hrz-align-center" />
        </td>
        <td>
            <SvgComponent icon="nc-hrz-align-right" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-ver-align-bottom" />
        </td>
        <td>
            <SvgComponent icon="nc-ver-align-middle" />
        </td>
        <td>
            <SvgComponent icon="nc-ver-align-top" />
        </td>
        <td>
            <SvgComponent icon="nc-include" />
        </td>
        <td>
            <SvgComponent icon="nc-position-in" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-position-out" />
        </td>
        <td>
            <SvgComponent icon="nc-align-bottom-left" />
        </td>
        <td>
            <SvgComponent icon="nc-align-bottom-right" />
        </td>
        <td>
            <SvgComponent icon="nc-align-top-left" />
        </td>
        <td>
            <SvgComponent icon="nc-align-top-right" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-check-square-on" />
        </td>
        <td>
            <SvgComponent icon="nc-check-square-off" />
        </td>
        <td>
            <SvgComponent icon="nc-check-circle-on" />
        </td>
        <td>
            <SvgComponent icon="nc-check-circle-off" />
        </td>
        <td>
            <SvgComponent icon="nc-starrating" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-timeline" />
        </td>
        <td>
            <SvgComponent icon="nc-audio" />
        </td>
        <td>
            <SvgComponent icon="nc-warning" />
        </td>
        <td>
            <SvgComponent icon="nc-align-distribute" />
        </td>
        <td>
            <SvgComponent icon="nc-switcher" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-reverse-glyph" />
        </td>
        <td>
            <SvgComponent icon="nc-countdown-style1" />
        </td>
        <td>
            <SvgComponent icon="nc-countdown-style2" />
        </td>
        <td>
            <SvgComponent icon="nc-countdown-style3" />
        </td>
        <td>
            <SvgComponent icon="nc-twitter" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-down-arrow-thin" />
        </td>
        <td>
            <SvgComponent icon="nc-down-arrow-heavy" />
        </td>
        <td>
            <SvgComponent icon="nc-down-arrow-tail" />
        </td>
        <td>
            <SvgComponent icon="nc-down-arrow-outline" />
        </td>
        <td>
            <SvgComponent icon="nc-down-arrow-filled" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-comments" />
        </td>
        <td>
            <SvgComponent icon="nc-playlist" />
        </td>
        <td>
            <SvgComponent icon="nc-tags" />
        </td>
        <td>
            <SvgComponent icon="nc-news" />
        </td>
        <td>
            <SvgComponent icon="nc-active" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-target" />
        </td>
        <td>
            <SvgComponent icon="nc-table-element" />
        </td>
        <td>
            <SvgComponent icon="nc-news" />
        </td>
        <td>
            <SvgComponent icon="nc-switcher-style-1" />
        </td>
        <td>
            <SvgComponent icon="nc-switcher-style-2" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-tabs-style-1" />
        </td>
        <td>
            <SvgComponent icon="nc-tabs-style-2" />
        </td>
        <td>
            <SvgComponent icon="nc-tabs-style-3" />
        </td>
        <td>
            <SvgComponent icon="nc-tabs-style-4" />
        </td>
        <td>
            <SvgComponent icon="nc-horizontal-items" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-vertical-items" />
        </td>
        <td>
            <SvgComponent icon="nc-tags-style-1" />
        </td>
        <td>
            <SvgComponent icon="nc-tags-style-2" />
        </td>
        <td>
            <SvgComponent icon="nc-timeline-style-1" />
        </td>
        <td>
            <SvgComponent icon="nc-timeline-style-2" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-timeline-style-3" />
        </td>
        <td>
            <SvgComponent icon="nc-timeline-style-4" />
        </td>
        <td>
            <SvgComponent icon="nc-timeline-style-5" />
        </td>
        <td>
            <SvgComponent icon="nc-timeline-style-6" />
        </td>
        <td>
            <SvgComponent icon="nc-progress-bar-style-2" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-progress-bar-style-1" />
        </td>
        <td>
            <SvgComponent icon="nc-counter-style-1" />
        </td>
        <td>
            <SvgComponent icon="nc-counter-style-2" />
        </td>
        <td>
            <SvgComponent icon="nc-counter-style-3" />
        </td>
        <td>
            <SvgComponent icon="nc-counter-style-4" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-tabs-style-5" />
        </td>
        <td>
            <SvgComponent icon="nc-tabs-style-6" />
        </td>
        <td>
            <SvgComponent icon="nc-business-hour" />
        </td>
        <td>
            <SvgComponent icon="nc-key" />
        </td>
        <td>
            <SvgComponent icon="nc-lottie" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-help-docs" />
        </td>
        <td>
            <SvgComponent icon="nc-check-circle-white" />
        </td>
        <td>
            <SvgComponent icon="nc-arrow-up" />
        </td>
        <td>
            <SvgComponent icon="nc-publish" />
        </td>
        <td>
            <SvgComponent icon="nc-rating-style-1" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-rating-style-2" />
        </td>
        <td>
            <SvgComponent icon="nc-login" />
        </td>
        <td>
            <SvgComponent icon="nc-wp-post-content" />
        </td>
        <td>
            <SvgComponent icon="nc-wp-post-excerpt" />
        </td>
        <td>
            <SvgComponent icon="nc-wp-post-info" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-wp-post-navigation" />
        </td>
        <td>
            <SvgComponent icon="nc-wp-posts" />
        </td>
        <td>
            <SvgComponent icon="nc-wp-post-title" />
        </td>
        <td>
            <SvgComponent icon="nc-wp-shortcode-element" />
        </td>
        <td>
            <SvgComponent icon="nc-wp-post-sidebar" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-woo-additional" />
        </td>
        <td>
            <SvgComponent icon="nc-woo-content" />
        </td>
        <td>
            <SvgComponent icon="nc-woo-excerpt" />
        </td>
        <td>
            <SvgComponent icon="nc-woo-gallery" />
        </td>
        <td>
            <SvgComponent icon="nc-woo-meta" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-woo-price" />
        </td>
        <td>
            <SvgComponent icon="nc-woo-rating" />
        </td>
        <td>
            <SvgComponent icon="nc-woo-sku" />
        </td>
        <td>
            <SvgComponent icon="nc-woo-stock" />
        </td>
        <td>
            <SvgComponent icon="nc-woo-title" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-woo-add-to-cart" />
        </td>
        <td>
            <SvgComponent icon="nc-woo-cart" />
        </td>
        <td>
            <SvgComponent icon="nc-woo-categories" />
        </td>
        <td>
            <SvgComponent icon="nc-woo-pages" />
        </td>
        <td>
            <SvgComponent icon="nc-woo-products" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-wp-breadcrumbs" />
        </td>
        <td>
            <SvgComponent icon="nc-woo-related-products" />
        </td>
        <td>
            <SvgComponent icon="nc-woo-upsell" />
        </td>
        <td>
            <SvgComponent icon="nc-woo-review" />
        </td>
        <td>
            <SvgComponent icon="nc-link-sidebar" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-cart-items-1" />
        </td>
        <td>
            <SvgComponent icon="nc-cart-items-2" />
        </td>
        <td>
            <SvgComponent icon="nc-attributes-table" />
        </td>
        <td>
            <SvgComponent icon="nc-attributes-dividers" />
        </td>
        <td>
            <SvgComponent icon="nc-woo-gallery-bottom" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-woo-gallery-left" />
        </td>
        <td>
            <SvgComponent icon="nc-woo-gallery-right" />
        </td>
        <td>
            <SvgComponent icon="nc-woo-gallery-top" />
        </td>
        <td>
            <SvgComponent icon="nc-user" />
        </td>
        <td>
            <SvgComponent icon="nc-filters" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-filters-columns" />
        </td>
        <td>
            <SvgComponent icon="nc-filters-full" />
        </td>
        <td>
            <SvgComponent icon="nc-filters-inline" />
        </td>
        <td>
            <SvgComponent icon="nc-filters-left" />
        </td>
        <td>
            <SvgComponent icon="nc-archives" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-tp-capitalize" />
        </td>
        <td>
            <SvgComponent icon="nc-tp-strike" />
        </td>
        <td>
            <SvgComponent icon="nc-tp-underline" />
        </td>
        <td>
            <SvgComponent icon="nc-left-arrow-heavy" />
        </td>
        <td>
            <SvgComponent icon="nc-shape" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-shopify-logo" />
        </td>
        <td>
            <SvgComponent icon="nc-user-email" />
        </td>
        <td>
            <SvgComponent icon="nc-user-details" />
        </td>
        <td>
            <SvgComponent icon="nc-user-roles" />
        </td>
        <td>
            <SvgComponent icon="nc-user-phone-number" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-download-saved-block" />
        </td>
        <td>
            <SvgComponent icon="nc-saved-block-tags" />
        </td>
        <td>
            <SvgComponent icon="nc-mask-shape-circle" />
        </td>
        <td>
            <SvgComponent icon="nc-mask-shape-rhombus" />
        </td>
        <td>
            <SvgComponent icon="nc-mask-shape-star" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-mask-shape-flower" />
        </td>
        <td>
            <SvgComponent icon="nc-mask-shape-triangle" />
        </td>
        <td>
            <SvgComponent icon="nc-mask-shape-blob1" />
        </td>
        <td>
            <SvgComponent icon="nc-mask-shape-blob2" />
        </td>
        <td>
            <SvgComponent icon="nc-mask-shape-blob4" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-mask-shape-brush1" />
        </td>
        <td>
            <SvgComponent icon="nc-mask-shape-brush2" />
        </td>
        <td>
            <SvgComponent icon="nc-mask-shape-brush3" />
        </td>
        <td>
            <SvgComponent icon="nc-mask-shape-brush4" />
        </td>
        <td>
            <SvgComponent icon="nc-mask-shape-poly1" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-mask-shape-poly3" />
        </td>
        <td>
            <SvgComponent icon="nc-mask-shape-poly4" />
        </td>
        <td>
            <SvgComponent icon="nc-collab" />
        </td>
        <td>
            <SvgComponent icon="nc-mouse" />
        </td>
        <td>
            <SvgComponent icon="nc-scroll-vertical" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-scroll-horizontal" />
        </td>
        <td>
            <SvgComponent icon="nc-scroll-transparency" />
        </td>
        <td>
            <SvgComponent icon="nc-scroll-scale" />
        </td>
        <td>
            <SvgComponent icon="nc-bounce" />
        </td>
        <td>
            <SvgComponent icon="nc-flash" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-double" />
        </td>
        <td>
            <SvgComponent icon="nc-groove" />
        </td>
        <td>
            <SvgComponent icon="nc-ridge" />
        </td>
        <td>
            <SvgComponent icon="nc-inset" />
        </td>
        <td>
            <SvgComponent icon="nc-outset" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-cart-inline" />
        </td>
        <td>
            <SvgComponent icon="nc-cart-column" />
        </td>
        <td>
            <SvgComponent icon="nc-space-between" />
        </td>
        <td>
            <SvgComponent icon="nc-line-align-right" />
        </td>
        <td>
            <SvgComponent icon="nc-line-align-center" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-line-align-left" />
        </td>
        <td>
            <SvgComponent icon="nc-line-icon" />
        </td>
        <td>
            <SvgComponent icon="nc-line-text" />
        </td>
        <td>
            <SvgComponent icon="nc-line-solid" />
        </td>
        <td>
            <SvgComponent icon="nc-multi-languages" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-shopping-bag" />
        </td>
        <td>
            <SvgComponent icon="nc-alert" />
        </td>
        <td>
            <SvgComponent icon="nc-calendly" />
        </td>
        <td>
            <SvgComponent icon="nc-diagonal-dash" />
        </td>
        <td>
            <SvgComponent icon="nc-fence" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-fence2" />
        </td>
        <td>
            <SvgComponent icon="nc-hand-dashes" />
        </td>
        <td>
            <SvgComponent icon="nc-hand-dots" />
        </td>
        <td>
            <SvgComponent icon="nc-hand-flows" />
        </td>
        <td>
            <SvgComponent icon="nc-hand-leaves" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-line-dot" />
        </td>
        <td>
            <SvgComponent icon="nc-stars" />
        </td>
        <td>
            <SvgComponent icon="nc-waves" />
        </td>
        <td>
            <SvgComponent icon="eye-dropper" />
        </td>
        <td>
            <SvgComponent icon="nc-hover-buzz" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-hover-wobble" />
        </td>
        <td>
            <SvgComponent icon="nc-hover-move" />
        </td>
        <td>
            <SvgComponent icon="nc-hover-pulse" />
        </td>
        <td>
            <SvgComponent icon="nc-hover-rotate" />
        </td>
        <td>
            <SvgComponent icon="nc-hover-scale" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-hover-skew" />
        </td>
        <td>
            <SvgComponent icon="nc-help" />
        </td>
        <td>
            <SvgComponent icon="nc-mask-shape-hexagon" />
        </td>
        <td>
            <SvgComponent icon="nc-leadific" />
        </td>
        <td>
            <SvgComponent icon="nc-lock2" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-flipbox" />
        </td>
        <td>
            <SvgComponent icon="nc-table-of-contents" />
        </td>
        <td>
            <SvgComponent icon="nc-tp-lowercase" />
        </td>
        <td>
            <SvgComponent icon="nc-mask-shape-circle" />
        </td>
        <td>
            <SvgComponent icon="nc-mask-shape-rhombus" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-mask-shape-star" />
        </td>
        <td>
            <SvgComponent icon="nc-mask-shape-flower" />
        </td>
        <td>
            <SvgComponent icon="nc-mask-shape-square" />
        </td>
        <td>
            <SvgComponent icon="nc-mask-shape-triangle" />
        </td>
        <td>
            <SvgComponent icon="nc-mask-shape-blob1" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-mask-shape-blob2" />
        </td>
        <td>
            <SvgComponent icon="nc-mask-shape-blob3" />
        </td>
        <td>
            <SvgComponent icon="nc-mask-shape-blob4" />
        </td>
        <td>
            <SvgComponent icon="nc-mask-shape-brush1" />
        </td>
        <td>
            <SvgComponent icon="nc-mask-shape-brush2" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-mask-shape-brush3" />
        </td>
        <td>
            <SvgComponent icon="nc-mask-shape-brush4" />
        </td>
        <td>
            <SvgComponent icon="nc-mask-shape-poly1" />
        </td>
        <td>
            <SvgComponent icon="nc-mask-shape-poly2" />
        </td>
        <td>
            <SvgComponent icon="nc-mask-shape-poly3" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-mask-shape-poly4" />
        </td>
        <td>
            <SvgComponent icon="nc-collab" />
        </td>
        <td>
            <SvgComponent icon="nc-multi-languages" />
        </td>
        <td>
            <SvgComponent icon="nc-radio-style1" />
        </td>
        <td>
            <SvgComponent icon="nc-radio-style2" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-radio-style3" />
        </td>
        <td>
            <SvgComponent icon="nc-flipbox" />
        </td>
        <td>
            <SvgComponent icon="nc-flip" />
        </td>
        <td>
            <SvgComponent icon="nc-offset" />
        </td>
        <td>
            <SvgComponent icon="nc-scale" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-skew" />
        </td>
        <td>
            <SvgComponent icon="nc-transform-align-bottom" />
        </td>
        <td>
            <SvgComponent icon="nc-transform-align-center" />
        </td>
        <td>
            <SvgComponent icon="nc-transform-align-left" />
        </td>
        <td>
            <SvgComponent icon="nc-transform-align-middle" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-transform-align-right" />
        </td>
        <td>
            <SvgComponent icon="nc-transform-align-top" />
        </td>
        <td>
            <SvgComponent icon="nc-tp-subscript" />
        </td>
        <td>
            <SvgComponent icon="nc-tp-superscript" />
        </td>
        <td>
            <SvgComponent icon="nc-sidebar-pin" />
        </td>
    </tr>
    <tr>
        <td>
            <SvgComponent icon="nc-templates-pages" />
        </td>
        <td>
            <SvgComponent icon="nc-hover-fill" />
        </td>
    </tr>
</table>
