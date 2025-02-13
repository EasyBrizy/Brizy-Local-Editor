# Brizy Page Assets Merger

This package is designed to streamline the management of assets used by `Brizy` pages. It efficiently merges, sorts, and
organizes various types of assets—such as scripts, styles, fonts—while removing duplicates and grouping libraries used
by components on pages. By utilizing this package, you can optimize the asset handling process, making it easier to
manage, maintain, and load assets for Brizy pages.

## Features

- **Merge Assets**: Automatically combines scripts, stylesheets, and font files used across different components and
  pages into organized bundles.
- **Remove Duplicates**: Eliminates any redundant or duplicate assets, reducing the number of requests made by the
  browser and optimizing page load times.
- **Sort and Organize**: Sorts assets in a structured order, ensuring that stylesheets and scripts are loaded in the
  correct sequence, avoiding potential issues with conflicting styles or JavaScript errors.
- **Grouping of Libraries**: Groups assets based on the components or sections of the page that utilize them. This
  allows for more efficient loading and dependency management.
- **Optimized Asset Management**: Ensures that only the necessary assets are included for each page, reducing overall
  page size and improving performance.

## Installation

To install the package, you can use the following command:

```bash
npm install @brizy/merge-page-assets
```

## Usage

Suppose you have a JSON file containing the assets used by a `Brizy` page. You can use the `AssetAggregator` class to merge and organize these assets.
Here is an example of how you can use the package:

```ts
import { AssetGroup, AssetAggregator } from "@brizy/merge-page-assets";

const assets = {
  freeStyles: {
    main: {
      name: "main",
      score: 30,
      content: {
        type: "file",
        url: "{@brizy_SITE_URL_PLACEHOLDER@}/wp-content/plugins/brizy/public/editor-build/dev/editor/css/preview.css",
        attr: {
          class: "brz-link brz-link-preview",
          rel: "stylesheet",
        },
      },
      pro: false,
    },
    pageFonts: [
      {
        name: "google",
        type: "google-font",
        score: 10,
        content: {
          type: "file",
          url: "https://fonts.googleapis.com/css?family=Lato:100,100italic,300,300italic,regular,italic,700,700italic,900,900italic|Overpass:100,100italic,200,200italic,300,300italic,regular,italic,600,600italic,700,700italic,800,800italic,900,900italic|Red+Hat+Text:regular,italic,500,500italic,700,700italic|DM+Serif+Text:regular,italic|Blinker:100,200,300,regular,600,700,800,900|Aleo:300,300italic,regular,italic,700,700italic|Nunito:200,200italic,300,300italic,regular,italic,600,600italic,700,700italic,800,800italic,900,900italic|Knewave:regular|Palanquin:100,200,300,regular,500,600,700|Palanquin+Dark:regular,500,600,700|Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic|Oswald:200,300,regular,500,600,700|Oxygen:300,regular,700|Playfair+Display:regular,italic,700,700italic,900,900italic|Fira+Sans:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic|Abril+Fatface:regular|Comfortaa:300,regular,500,600,700|Kaushan+Script:regular|Noto+Serif:regular,italic,700,700italic|Montserrat:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic&subset=arabic,bengali,cyrillic,cyrillic-ext,devanagari,greek,greek-ext,gujarati,hebrew,khmer,korean,latin-ext,tamil,telugu,thai,vietnamese&display=swap",
          attr: {
            class: "brz-link brz-link-google",
            type: "text/css",
            rel: "stylesheet",
          },
        },
        pro: false,
      },
    ],
    pageStyles: [
      {
        name: "projectPrefetchFonts",
        score: 10,
        content: {
          type: "code",
          content:
            '<link class="brz-link brz-link-google-prefetch" rel="dns-prefetch" href="//ajax.googleapis.com"> <link class="brz-link brz-link-google-prefetch" rel="dns-prefetch" href="//fonts.googleapis.com"> <link class="brz-link brz-link-google-preconnect" rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>',
        },
        pro: false,
      },
      {
        name: "projectPalette",
        score: 50,
        content: {
          type: "inline",
          content:
            ".brz .brz-cp-color1, .brz .brz-bcp-color1{color: #A170D9;}.brz .brz-cp-color2, .brz .brz-bcp-color2{color: #1C1C1C;}.brz .brz-cp-color3, .brz .brz-bcp-color3{color: #05CAB6;}.brz .brz-cp-color4, .brz .brz-bcp-color4{color: #B8E6E1;}.brz .brz-cp-color5, .brz .brz-bcp-color5{color: #F5D4D1;}.brz .brz-cp-color6, .brz .brz-bcp-color6{color: #EBEBEB;}.brz .brz-cp-color7, .brz .brz-bcp-color7{color: #666666;}.brz .brz-cp-color8, .brz .brz-bcp-color8{color: #FFFFFF;}",
          attr: {
            class: "brz-style brz-project__style-palette",
          },
        },
        pro: false,
      },
      {
        name: "0",
        score: 50,
        content: {
          type: "inline",
          content: "",
          attr: {
            class: "brz-style brz-project__style-fonts",
          },
        },
        pro: false,
      },
    ],
    generic: [
      {
        name: "metaViewport",
        score: 10,
        content: {
          type: "code",
          content: '<meta name="viewport" content="width=device-width, initial-scale=1">',
        },
        pro: false,
      },
      {
        name: "-2140421345",
        score: 50,
        content: {
          type: "code",
          content:
            '<style class="brz-style"></style><style class="brz-style">.brz .brz-css-bxphg{z-index: auto;margin:0;}.brz .brz-css-bxphg.brz-section .brz-section__content{min-height: auto;display:flex;}.brz .brz-css-bxphg .brz-container{justify-content:center;}.brz .brz-css-bxphg > .slick-slider > .brz-slick-slider__dots{color: rgba(0, 0, 0, 1);}.brz .brz-css-bxphg > .slick-slider > .brz-slick-slider__arrow{color: rgba(0, 0, 0, 0.7);}@media(min-width:991px){.brz .brz-css-bxphg{display:block;}}@media(min-width:991px){.brz .brz-css-bxphg > .slick-slider > .brz-slick-slider__arrow:hover{color: rgba(0, 0, 0, 1);}}@media(max-width:991px) and (min-width:768px){.brz .brz-css-bxphg{z-index: auto;margin:0;}.brz .brz-css-bxphg.brz-section .brz-section__content{min-height: auto;display:flex;}.brz .brz-css-bxphg .brz-container{justify-content:center;}.brz .brz-css-bxphg > .slick-slider > .brz-slick-slider__dots{color: rgba(0, 0, 0, 1);}.brz .brz-css-bxphg > .slick-slider > .brz-slick-slider__arrow{color: rgba(0, 0, 0, 0.7);}}@media(max-width:991px) and (min-width:768px){.brz .brz-css-bxphg{display:block;}}@media(max-width:767px){.brz .brz-css-bxphg{z-index: auto;margin:0;}.brz .brz-css-bxphg.brz-section .brz-section__content{min-height: auto;display:flex;}.brz .brz-css-bxphg .brz-container{justify-content:center;}.brz .brz-css-bxphg > .slick-slider > .brz-slick-slider__dots{color: rgba(0, 0, 0, 1);}.brz .brz-css-bxphg > .slick-slider > .brz-slick-slider__arrow{color: rgba(0, 0, 0, 0.7);}}@media(max-width:767px){.brz .brz-css-bxphg{display:block;}}\n.brz .brz-css-pqvdv{padding:75px 0px 75px 0px;}.brz .brz-css-pqvdv > .brz-bg{border:0px solid rgba(102, 115, 141, 0);border-radius:0;}.brz .brz-css-pqvdv > .brz-bg > .brz-bg-image{background-image:none;display: block;}.brz .brz-css-pqvdv > .brz-bg > .brz-bg-image:after{content: "";background-image:none;}.brz .brz-css-pqvdv > .brz-bg > .brz-bg-color{background-color:rgba(0, 0, 0, 0);background-image:none;}.brz .brz-css-pqvdv > .brz-bg > .brz-bg-map{display: none;}.brz .brz-css-pqvdv > .brz-bg > .brz-bg-video{display: none;}.brz .brz-css-pqvdv > .brz-bg > .brz-bg-shape__top{background-image: none;background-size: 100% 100px; height: 100px;transform: rotateX(0deg) rotateY(0deg);z-index: auto;}.brz .brz-css-pqvdv > .brz-bg > .brz-bg-shape__bottom{background-image: none;background-size: 100% 100px; height: 100px;transform: rotateX(-180deg) rotateY(-180deg);z-index: auto;}@media(min-width:991px){.brz .brz-css-pqvdv > .brz-bg > .brz-bg-image{background-attachment:scroll;}}@media(max-width:991px) and (min-width:768px){.brz .brz-css-pqvdv{padding:50px 15px 50px 15px;}.brz .brz-css-pqvdv > .brz-bg{border:0px solid rgba(102, 115, 141, 0);border-radius:0;}.brz .brz-css-pqvdv > .brz-bg > .brz-bg-image{background-image:none;display: block;}.brz .brz-css-pqvdv > .brz-bg > .brz-bg-image:after{content: "";background-image:none;}.brz .brz-css-pqvdv > .brz-bg > .brz-bg-color{background-color:rgba(0, 0, 0, 0);background-image:none;}.brz .brz-css-pqvdv > .brz-bg > .brz-bg-map{display: none;}.brz .brz-css-pqvdv > .brz-bg > .brz-bg-video{display: none;}.brz .brz-css-pqvdv > .brz-bg > .brz-bg-shape__top{background-image: none;background-size: 100% 100px; height: 100px;transform: rotateX(0deg) rotateY(0deg);z-index: auto;}.brz .brz-css-pqvdv > .brz-bg > .brz-bg-shape__bottom{background-image: none;background-size: 100% 100px; height: 100px;transform: rotateX(-180deg) rotateY(-180deg);z-index: auto;}}@media(max-width:767px){.brz .brz-css-pqvdv{padding:25px 15px 25px 15px;}.brz .brz-css-pqvdv > .brz-bg{border:0px solid rgba(102, 115, 141, 0);border-radius:0;}.brz .brz-css-pqvdv > .brz-bg > .brz-bg-image{background-image:none;display: block;}.brz .brz-css-pqvdv > .brz-bg > .brz-bg-image:after{content: "";background-image:none;}.brz .brz-css-pqvdv > .brz-bg > .brz-bg-color{background-color:rgba(0, 0, 0, 0);background-image:none;}.brz .brz-css-pqvdv > .brz-bg > .brz-bg-map{display: none;}.brz .brz-css-pqvdv > .brz-bg > .brz-bg-video{display: none;}.brz .brz-css-pqvdv > .brz-bg > .brz-bg-shape__top{background-image: none;background-size: 100% 100px; height: 100px;transform: rotateX(0deg) rotateY(0deg);z-index: auto;}.brz .brz-css-pqvdv > .brz-bg > .brz-bg-shape__bottom{background-image: none;background-size: 100% 100px; height: 100px;transform: rotateX(-180deg) rotateY(-180deg);z-index: auto;}}\n.brz .brz-css-hpcmo{border:0px solid transparent;}@media(min-width:991px){.brz .brz-css-hpcmo{max-width: calc(1 * var(--brz-section-container-max-width, 1170px));}}@media(max-width:991px) and (min-width:768px){.brz .brz-css-hpcmo{border:0px solid transparent;}}@media(max-width:991px) and (min-width:768px){.brz .brz-css-hpcmo{max-width: 100%}}@media(max-width:767px){.brz .brz-css-hpcmo{border:0px solid transparent;}}@media(max-width:767px){.brz .brz-css-hpcmo{max-width: 100%}}\n.brz .brz-css-idipn{padding:0;margin:10px 0px 10px 0px;justify-content:center;position:relative;}@media(min-width:991px){.brz .brz-css-idipn{display:flex;z-index: auto;position:relative;}}@media(max-width:991px) and (min-width:768px){.brz .brz-css-idipn{padding:0;margin:10px 0px 10px 0px;justify-content:center;position:relative;}}@media(max-width:991px) and (min-width:768px){.brz .brz-css-idipn{display:flex;z-index: auto;position:relative;}}@media(max-width:767px){.brz .brz-css-idipn{padding:0;margin:10px 0px 10px 0px;justify-content:center;position:relative;}}@media(max-width:767px){.brz .brz-css-idipn{display:flex;z-index: auto;position:relative;}}\n.brz .brz-css-eqnqt{width:100%;background-color:rgba(0, 0, 0, 0);border:0px solid rgba(102, 115, 141, 0);}.brz .brz-css-eqnqt .brz-comments__name{color:rgba(161, 112, 217, 1);font-family:Lato, sans-serif;font-size:20px;line-height:1.3;font-weight:600;letter-spacing:-0.1px;}.brz .brz-css-eqnqt .brz-comments__date{color:rgba(102, 102, 102, 0.75);font-family:Lato, sans-serif;font-size:15px;line-height:1.3;font-weight:500;letter-spacing:0px;}.brz .brz-css-eqnqt .brz-comments__reply{font-family:Lato, sans-serif !important;font-size:15px !important;line-height:1.3 !important;font-weight:600 !important;letter-spacing:0px !important;}.brz .brz-css-eqnqt .brz-comment-awaiting-moderation{color:rgba(102, 102, 102, 0.75);font-family:Lato, sans-serif;font-size:15px;line-height:1.9;font-weight:400;letter-spacing:0.5px;}.brz .brz-css-eqnqt .brz-comments__text{color:rgba(102, 102, 102, 0.75);font-family:Lato, sans-serif;font-size:15px;line-height:1.9;font-weight:400;letter-spacing:0.5px;}.brz .brz-css-eqnqt .comment-reply-link{font-family:Lato, sans-serif !important;font-size:15px !important;line-height:1.3 !important;font-weight:600 !important;letter-spacing:0px !important;}.brz .brz-css-eqnqt .brz-comment-respond .brz-submit{color:rgba(235, 235, 235, 1);background-color:rgba(61, 191, 232, 1);font-family:Lato, sans-serif !important;font-size:16px !important;line-height:1 !important;font-weight:600 !important;letter-spacing:-0.1px !important;}.brz .brz-css-eqnqt .brz-comments__logo .brz-img{width: 50px !important; height: 50px;}.brz .brz-css-eqnqt .brz-comments__right-date{width: calc(100% - 60px);}.brz .brz-css-eqnqt .brz-logged-in-as a, .brz-css-eqnqt .nav-links a, .brz-css-eqnqt .comment-reply-link, .brz-css-eqnqt #cancel-comment-reply-link{color:rgba(61, 191, 232, 1) !important;}.brz .brz-css-eqnqt .brz-comments.brz-parent .brz-comments{margin-left:60px;}.brz .brz-css-eqnqt .brz-comment-reply-title, .brz-css-eqnqt .brz-comment-form-comment > label{font-family:Lato, sans-serif;}.brz .brz-css-eqnqt .review .brz-comments__rating .star-rating{font-size:16px;color:rgba(255, 185, 0, 1);}.brz .brz-css-eqnqt .review .brz-comments__rating .star-rating:before{color:rgba(255, 185, 0, 0.7);}.brz .brz-css-eqnqt .stars a{font-size:16px;color:rgba(255, 185, 0, 0.7);}.brz .brz-css-eqnqt .stars:hover a::before{color:rgba(255, 185, 0, 1);}.brz .brz-css-eqnqt .stars a:hover{color:rgba(255, 185, 0, 1);}.brz .brz-css-eqnqt .stars a:hover ~ a::before{color:rgba(255, 185, 0, 0.7);}.brz .brz-css-eqnqt .stars a.active ~ a::before{color:rgba(255, 185, 0, 0.7);}.brz .brz-css-eqnqt .selected a::before{color:rgba(255, 185, 0, 1);}@media(min-width:991px){.brz .brz-css-eqnqt{transition-duration:0.50s;transition-property:color,border,box-shadow;}.brz .brz-css-eqnqt .brz-comments__name{transition-duration:0.50s;transition-property:color,border,box-shadow;}.brz .brz-css-eqnqt .brz-comment-awaiting-moderation{transition-duration:0.50s;transition-property:color,border,box-shadow;}.brz .brz-css-eqnqt .brz-comments__text{transition-duration:0.50s;transition-property:color,border,box-shadow;}}@media(max-width:991px) and (min-width:768px){.brz .brz-css-eqnqt{width:100%;background-color:rgba(0, 0, 0, 0);border:0px solid rgba(102, 115, 141, 0);}.brz .brz-css-eqnqt .brz-comments__name{color:rgba(161, 112, 217, 1);font-size:20px;line-height:1.3;font-weight:600;letter-spacing:-0.1px;}.brz .brz-css-eqnqt .brz-comments__date{color:rgba(102, 102, 102, 0.75);font-size:15px;line-height:1.3;font-weight:500;letter-spacing:0px;}.brz .brz-css-eqnqt .brz-comments__reply{font-size:15px !important;line-height:1.3 !important;font-weight:600 !important;letter-spacing:0px !important;}.brz .brz-css-eqnqt .brz-comment-awaiting-moderation{color:rgba(102, 102, 102, 0.75);font-size:15px;line-height:1.9;font-weight:400;letter-spacing:0.5px;}.brz .brz-css-eqnqt .brz-comments__text{color:rgba(102, 102, 102, 0.75);font-size:15px;line-height:1.9;font-weight:400;letter-spacing:0.5px;}.brz .brz-css-eqnqt .comment-reply-link{font-size:15px !important;line-height:1.3 !important;font-weight:600 !important;letter-spacing:0px !important;}.brz .brz-css-eqnqt .brz-comment-respond .brz-submit{color:rgba(235, 235, 235, 1);background-color:rgba(61, 191, 232, 1);font-size:15px !important;line-height:1.3 !important;font-weight:600 !important;letter-spacing:0px !important;}.brz .brz-css-eqnqt .brz-comments__logo .brz-img{width: 50px !important; height: 50px;}.brz .brz-css-eqnqt .brz-comments__right-date{width: calc(100% - 60px);}.brz .brz-css-eqnqt .brz-logged-in-as a, .brz-css-eqnqt .nav-links a, .brz-css-eqnqt .comment-reply-link, .brz-css-eqnqt #cancel-comment-reply-link{color:rgba(61, 191, 232, 1) !important;}.brz .brz-css-eqnqt .brz-comments.brz-parent .brz-comments{margin-left:60px;}.brz .brz-css-eqnqt .review .brz-comments__rating .star-rating{font-size:16px;color:rgba(255, 185, 0, 1);}.brz .brz-css-eqnqt .review .brz-comments__rating .star-rating:before{color:rgba(255, 185, 0, 0.7);}.brz .brz-css-eqnqt .stars a{font-size:16px;color:rgba(255, 185, 0, 0.7);}.brz .brz-css-eqnqt .stars:hover a::before{color:rgba(255, 185, 0, 1);}.brz .brz-css-eqnqt .stars a:hover{color:rgba(255, 185, 0, 1);}.brz .brz-css-eqnqt .stars a:hover ~ a::before{color:rgba(255, 185, 0, 0.7);}.brz .brz-css-eqnqt .stars a.active ~ a::before{color:rgba(255, 185, 0, 0.7);}.brz .brz-css-eqnqt .selected a::before{color:rgba(255, 185, 0, 1);}}@media(max-width:991px) and (min-width:768px){.brz .brz-css-eqnqt{transition-duration:0.50s;transition-property:color,border,box-shadow;}.brz .brz-css-eqnqt .brz-comments__name{transition-duration:0.50s;transition-property:color,border,box-shadow;}.brz .brz-css-eqnqt .brz-comment-awaiting-moderation{transition-duration:0.50s;transition-property:color,border,box-shadow;}.brz .brz-css-eqnqt .brz-comments__text{transition-duration:0.50s;transition-property:color,border,box-shadow;}}@media(max-width:767px){.brz .brz-css-eqnqt{width:100%;background-color:rgba(0, 0, 0, 0);border:0px solid rgba(102, 115, 141, 0);}.brz .brz-css-eqnqt .brz-comments__name{color:rgba(161, 112, 217, 1);font-size:20px;line-height:1.3;font-weight:600;letter-spacing:-0.1px;}.brz .brz-css-eqnqt .brz-comments__date{color:rgba(102, 102, 102, 0.75);font-size:15px;line-height:1.3;font-weight:500;letter-spacing:0px;}.brz .brz-css-eqnqt .brz-comments__reply{font-size:15px !important;line-height:1.3 !important;font-weight:600 !important;letter-spacing:0px !important;}.brz .brz-css-eqnqt .brz-comment-awaiting-moderation{color:rgba(102, 102, 102, 0.75);font-size:15px;line-height:1.9;font-weight:400;letter-spacing:0.5px;}.brz .brz-css-eqnqt .brz-comments__text{color:rgba(102, 102, 102, 0.75);font-size:15px;line-height:1.9;font-weight:400;letter-spacing:0.5px;}.brz .brz-css-eqnqt .comment-reply-link{font-size:15px !important;line-height:1.3 !important;font-weight:600 !important;letter-spacing:0px !important;}.brz .brz-css-eqnqt .brz-comment-respond .brz-submit{color:rgba(235, 235, 235, 1);background-color:rgba(61, 191, 232, 1);font-size:15px !important;line-height:1.3 !important;font-weight:600 !important;letter-spacing:0px !important;}.brz .brz-css-eqnqt .brz-comments__logo .brz-img{width: 50px !important; height: 50px;}.brz .brz-css-eqnqt .brz-comments__right-date{width: calc(100% - 60px);}.brz .brz-css-eqnqt .brz-logged-in-as a, .brz-css-eqnqt .nav-links a, .brz-css-eqnqt .comment-reply-link, .brz-css-eqnqt #cancel-comment-reply-link{color:rgba(61, 191, 232, 1) !important;}.brz .brz-css-eqnqt .brz-comments.brz-parent .brz-comments{margin-left:60px;}.brz .brz-css-eqnqt .review .brz-comments__rating .star-rating{font-size:16px;color:rgba(255, 185, 0, 1);}.brz .brz-css-eqnqt .review .brz-comments__rating .star-rating:before{color:rgba(255, 185, 0, 0.7);}.brz .brz-css-eqnqt .stars a{font-size:16px;color:rgba(255, 185, 0, 0.7);}.brz .brz-css-eqnqt .stars:hover a::before{color:rgba(255, 185, 0, 1);}.brz .brz-css-eqnqt .stars a:hover{color:rgba(255, 185, 0, 1);}.brz .brz-css-eqnqt .stars a:hover ~ a::before{color:rgba(255, 185, 0, 0.7);}.brz .brz-css-eqnqt .stars a.active ~ a::before{color:rgba(255, 185, 0, 0.7);}.brz .brz-css-eqnqt .selected a::before{color:rgba(255, 185, 0, 1);}}@media(max-width:767px){.brz .brz-css-eqnqt{transition-duration:0.50s;transition-property:color,border,box-shadow;}.brz .brz-css-eqnqt .brz-comments__name{transition-duration:0.50s;transition-property:color,border,box-shadow;}.brz .brz-css-eqnqt .brz-comment-awaiting-moderation{transition-duration:0.50s;transition-property:color,border,box-shadow;}.brz .brz-css-eqnqt .brz-comments__text{transition-duration:0.50s;transition-property:color,border,box-shadow;}}\n.brz .brz-css-kmsgi{justify-content:flex-end;}@media(max-width:991px) and (min-width:768px){.brz .brz-css-kmsgi{justify-content:flex-end;}}@media(max-width:767px){.brz .brz-css-kmsgi{justify-content:flex-end;}}\n</style>',
        },
        pro: false,
      },
    ],
    libsMap: [
      {
        name: "group-jq",
        selectors: [".brz__group__jquery"],
        score: 20,
        content: {
          type: "file",
          url: "{@brizy_SITE_URL_PLACEHOLDER@}/wp-content/plugins/brizy/public/editor-build/dev/editor/css/group-jq.css",
          attr: {
            class: "brz-link brz-link-preview-lib",
            rel: "stylesheet",
            "data-group": "group-jq",
          },
        },
        pro: false,
      },
      {
        name: "group-1",
        selectors: [".brz__group__jquery", ".brz-forms", ".brz-forms2"],
        score: 20,
        content: {
          type: "file",
          url: "{@brizy_SITE_URL_PLACEHOLDER@}/wp-content/plugins/brizy/public/editor-build/dev/editor/css/group-1.css",
          attr: {
            class: "brz-link brz-link-preview-lib",
            rel: "stylesheet",
            "data-group": "group-1",
          },
        },
        pro: false,
      },
      {
        name: "group-2",
        selectors: [".brz__group__jquery", ".brz-slick-slider", ".brz-carousel", ".brz-countdown", ".brz-countdown2"],
        score: 20,
        content: {
          type: "file",
          url: "{@brizy_SITE_URL_PLACEHOLDER@}/wp-content/plugins/brizy/public/editor-build/dev/editor/css/group-2.css",
          attr: {
            class: "brz-link brz-link-preview-lib",
            rel: "stylesheet",
            "data-group": "group-2",
          },
        },
        pro: false,
      },
      {
        name: "group-3",
        selectors: [".brz__group__jquery", ".brz-animated"],
        score: 20,
        content: {
          type: "file",
          url: "{@brizy_SITE_URL_PLACEHOLDER@}/wp-content/plugins/brizy/public/editor-build/dev/editor/css/group-3.css",
          attr: {
            class: "brz-link brz-link-preview-lib",
            rel: "stylesheet",
            "data-group": "group-3",
          },
        },
        pro: false,
      },
      {
        name: "group-1_2",
        selectors: [
          ".brz__group__jquery",
          ".brz-forms",
          ".brz-forms2",
          ".brz-slick-slider",
          ".brz-carousel",
          ".brz-countdown",
          ".brz-countdown2",
        ],
        score: 20,
        content: {
          type: "file",
          url: "{@brizy_SITE_URL_PLACEHOLDER@}/wp-content/plugins/brizy/public/editor-build/dev/editor/css/group-1_2.css",
          attr: {
            class: "brz-link brz-link-preview-lib",
            rel: "stylesheet",
            "data-group": "group-1_2",
          },
        },
        pro: false,
      },
      {
        name: "group-1_3",
        selectors: [".brz__group__jquery", ".brz-forms", ".brz-forms2", ".brz-animated"],
        score: 20,
        content: {
          type: "file",
          url: "{@brizy_SITE_URL_PLACEHOLDER@}/wp-content/plugins/brizy/public/editor-build/dev/editor/css/group-1_3.css",
          attr: {
            class: "brz-link brz-link-preview-lib",
            rel: "stylesheet",
            "data-group": "group-1_3",
          },
        },
        pro: false,
      },
      {
        name: "group-2_3",
        selectors: [
          ".brz__group__jquery",
          ".brz-slick-slider",
          ".brz-carousel",
          ".brz-countdown",
          ".brz-countdown2",
          ".brz-animated",
        ],
        score: 20,
        content: {
          type: "file",
          url: "{@brizy_SITE_URL_PLACEHOLDER@}/wp-content/plugins/brizy/public/editor-build/dev/editor/css/group-2_3.css",
          attr: {
            class: "brz-link brz-link-preview-lib",
            rel: "stylesheet",
            "data-group": "group-2_3",
          },
        },
        pro: false,
      },
      {
        name: "group-all",
        selectors: [
          ".brz__group__jquery",
          ".brz-forms",
          ".brz-forms2",
          ".brz-slick-slider",
          ".brz-carousel",
          ".brz-countdown",
          ".brz-countdown2",
          ".brz-animated",
        ],
        score: 20,
        content: {
          type: "file",
          url: "{@brizy_SITE_URL_PLACEHOLDER@}/wp-content/plugins/brizy/public/editor-build/dev/editor/css/group-all.css",
          attr: {
            class: "brz-link brz-link-preview-lib",
            rel: "stylesheet",
            "data-group": "group-all",
          },
        },
        pro: false,
      },
    ],
    libsSelectors: [],
  },
  freeScripts: {
    main: {
      name: "main",
      score: 30,
      content: {
        type: "file",
        url: "{@brizy_SITE_URL_PLACEHOLDER@}/wp-content/plugins/brizy/public/editor-build/dev/editor/js/preview.js",
        attr: {
          class: "brz-script brz-script-preview",
        },
      },
      pro: false,
    },
    generic: [
      {
        name: "initMain",
        score: 40,
        content: {
          type: "inline",
          content: 'jQuery(document).ready(function() { window.Brizy.emit("init.dom", jQuery(document.body)); });',
          attr: {
            class: "brz-script brz-script-emit",
          },
        },
        pro: false,
      },
    ],
    libsMap: [
      {
        name: "group-jq",
        selectors: [".brz__group__jquery"],
        score: 20,
        content: {
          type: "file",
          url: "{@brizy_SITE_URL_PLACEHOLDER@}/wp-content/plugins/brizy/public/editor-build/dev/editor/js/group-jq.js",
          attr: {
            class: "brz-script brz-script-preview-lib",
            "data-group": "group-jq",
          },
        },
        pro: false,
      },
      {
        name: "group-1",
        selectors: [".brz__group__jquery", ".brz-forms", ".brz-forms2"],
        score: 20,
        content: {
          type: "file",
          url: "{@brizy_SITE_URL_PLACEHOLDER@}/wp-content/plugins/brizy/public/editor-build/dev/editor/js/group-1.js",
          attr: {
            class: "brz-script brz-script-preview-lib",
            "data-group": "group-1",
          },
        },
        pro: false,
      },
      {
        name: "group-2",
        selectors: [".brz__group__jquery", ".brz-slick-slider", ".brz-carousel", ".brz-countdown", ".brz-countdown2"],
        score: 20,
        content: {
          type: "file",
          url: "{@brizy_SITE_URL_PLACEHOLDER@}/wp-content/plugins/brizy/public/editor-build/dev/editor/js/group-2.js",
          attr: {
            class: "brz-script brz-script-preview-lib",
            "data-group": "group-2",
          },
        },
        pro: false,
      },
      {
        name: "group-3",
        selectors: [".brz__group__jquery", ".brz-animated"],
        score: 20,
        content: {
          type: "file",
          url: "{@brizy_SITE_URL_PLACEHOLDER@}/wp-content/plugins/brizy/public/editor-build/dev/editor/js/group-3.js",
          attr: {
            class: "brz-script brz-script-preview-lib",
            "data-group": "group-3",
          },
        },
        pro: false,
      },
      {
        name: "group-1_2",
        selectors: [
          ".brz__group__jquery",
          ".brz-forms",
          ".brz-forms2",
          ".brz-slick-slider",
          ".brz-carousel",
          ".brz-countdown",
          ".brz-countdown2",
        ],
        score: 20,
        content: {
          type: "file",
          url: "{@brizy_SITE_URL_PLACEHOLDER@}/wp-content/plugins/brizy/public/editor-build/dev/editor/js/group-1_2.js",
          attr: {
            class: "brz-script brz-script-preview-lib",
            "data-group": "group-1_2",
          },
        },
        pro: false,
      },
      {
        name: "group-1_3",
        selectors: [".brz__group__jquery", ".brz-forms", ".brz-forms2", ".brz-animated"],
        score: 20,
        content: {
          type: "file",
          url: "{@brizy_SITE_URL_PLACEHOLDER@}/wp-content/plugins/brizy/public/editor-build/dev/editor/js/group-1_3.js",
          attr: {
            class: "brz-script brz-script-preview-lib",
            "data-group": "group-1_3",
          },
        },
        pro: false,
      },
      {
        name: "group-2_3",
        selectors: [
          ".brz__group__jquery",
          ".brz-slick-slider",
          ".brz-carousel",
          ".brz-countdown",
          ".brz-countdown2",
          ".brz-animated",
        ],
        score: 20,
        content: {
          type: "file",
          url: "{@brizy_SITE_URL_PLACEHOLDER@}/wp-content/plugins/brizy/public/editor-build/dev/editor/js/group-2_3.js",
          attr: {
            class: "brz-script brz-script-preview-lib",
            "data-group": "group-2_3",
          },
        },
        pro: false,
      },
      {
        name: "group-all",
        selectors: [
          ".brz__group__jquery",
          ".brz-forms",
          ".brz-forms2",
          ".brz-slick-slider",
          ".brz-carousel",
          ".brz-countdown",
          ".brz-countdown2",
          ".brz-animated",
        ],
        score: 20,
        content: {
          type: "file",
          url: "{@brizy_SITE_URL_PLACEHOLDER@}/wp-content/plugins/brizy/public/editor-build/dev/editor/js/group-all.js",
          attr: {
            class: "brz-script brz-script-preview-lib",
            "data-group": "group-all",
          },
        },
        pro: false,
      },
    ],
    libsSelectors: [".brz__group__jquery"],
  },
  proStyles: {
    main: {
      name: "main",
      score: 30,
      content: {
        type: "file",
        url: "http://brizy.local/wp-content/plugins/brizy-pro/public/editor-build/dev/css/preview.pro.css",
        attr: {
          class: "brz-link brz-link-preview-pro",
          rel: "stylesheet",
        },
      },
      pro: true,
    },
    generic: [],
    libsMap: [
      {
        name: "group-1",
        selectors: [".brz-image__gallery", ".brz-posts--masonry", ".brz-image__lightbox"],
        score: 21,
        content: {
          type: "file",
          url: "http://brizy.local/wp-content/plugins/brizy-pro/public/editor-build/dev/css/group-1-pro.css",
          attr: {
            class: "brz-link brz-link-preview-lib-pro",
            rel: "stylesheet",
            "data-group": "group-1",
          },
        },
        pro: true,
      },
      {
        name: "group-2",
        selectors: [".brz-menu__mmenu"],
        score: 21,
        content: {
          type: "file",
          url: "http://brizy.local/wp-content/plugins/brizy-pro/public/editor-build/dev/css/group-2-pro.css",
          attr: {
            class: "brz-link brz-link-preview-lib-pro",
            rel: "stylesheet",
            "data-group": "group-2",
          },
        },
        pro: true,
      },
      {
        name: "group-3",
        selectors: [".brz-lottie"],
        score: 21,
        content: {
          type: "file",
          url: "http://brizy.local/wp-content/plugins/brizy-pro/public/editor-build/dev/css/group-3-pro.css",
          attr: {
            class: "brz-link brz-link-preview-lib-pro",
            rel: "stylesheet",
            "data-group": "group-3",
          },
        },
        pro: true,
      },
      {
        name: "group-1_2",
        selectors: [".brz-image__gallery", ".brz-posts--masonry", ".brz-image__lightbox", ".brz-menu__mmenu"],
        score: 21,
        content: {
          type: "file",
          url: "http://brizy.local/wp-content/plugins/brizy-pro/public/editor-build/dev/css/group-1_2-pro.css",
          attr: {
            class: "brz-link brz-link-preview-lib-pro",
            rel: "stylesheet",
            "data-group": "group-1_2",
          },
        },
        pro: true,
      },
      {
        name: "group-1_3",
        selectors: [".brz-image__gallery", ".brz-posts--masonry", ".brz-image__lightbox", ".brz-lottie"],
        score: 21,
        content: {
          type: "file",
          url: "http://brizy.local/wp-content/plugins/brizy-pro/public/editor-build/dev/css/group-1_3-pro.css",
          attr: {
            class: "brz-link brz-link-preview-lib-pro",
            rel: "stylesheet",
            "data-group": "group-1_3",
          },
        },
        pro: true,
      },
      {
        name: "group-2_3",
        selectors: [".brz-menu__mmenu", ".brz-lottie"],
        score: 21,
        content: {
          type: "file",
          url: "http://brizy.local/wp-content/plugins/brizy-pro/public/editor-build/dev/css/group-2_3-pro.css",
          attr: {
            class: "brz-link brz-link-preview-lib-pro",
            rel: "stylesheet",
            "data-group": "group-2_3",
          },
        },
        pro: true,
      },
      {
        name: "group-all",
        selectors: [
          ".brz-image__gallery",
          ".brz-posts--masonry",
          ".brz-image__lightbox",
          ".brz-menu__mmenu",
          ".brz-lottie",
        ],
        score: 21,
        content: {
          type: "file",
          url: "http://brizy.local/wp-content/plugins/brizy-pro/public/editor-build/dev/css/group-all-pro.css",
          attr: {
            class: "brz-link brz-link-preview-lib-pro",
            rel: "stylesheet",
            "data-group": "group-all",
          },
        },
        pro: true,
      },
    ],
    libsSelectors: [],
  },
  proScripts: {
    main: {
      name: "main",
      score: 30,
      content: {
        type: "file",
        url: "http://brizy.local/wp-content/plugins/brizy-pro/public/editor-build/dev/js/preview.pro.js",
        attr: {
          class: "brz-script brz-script-preview-pro",
        },
      },
      pro: true,
    },
    generic: [],
    libsMap: [
      {
        name: "group-1",
        selectors: [".brz-image__gallery", ".brz-posts--masonry", ".brz-image__lightbox"],
        score: 21,
        content: {
          type: "file",
          url: "http://brizy.local/wp-content/plugins/brizy-pro/public/editor-build/dev/js/group-1.pro.js",
          attr: {
            class: "brz-script brz-script-preview-lib-pro",
            "data-group": "group-1",
          },
        },
        pro: true,
      },
      {
        name: "group-2",
        selectors: [".brz-menu__mmenu"],
        score: 21,
        content: {
          type: "file",
          url: "http://brizy.local/wp-content/plugins/brizy-pro/public/editor-build/dev/js/group-2.pro.js",
          attr: {
            class: "brz-script brz-script-preview-lib-pro",
            "data-group": "group-2",
          },
        },
        pro: true,
      },
      {
        name: "group-3",
        selectors: [".brz-lottie"],
        score: 21,
        content: {
          type: "file",
          url: "http://brizy.local/wp-content/plugins/brizy-pro/public/editor-build/dev/js/group-3.pro.js",
          attr: {
            class: "brz-script brz-script-preview-lib-pro",
            "data-group": "group-3",
          },
        },
        pro: true,
      },
      {
        name: "group-1_2",
        selectors: [".brz-image__gallery", ".brz-posts--masonry", ".brz-image__lightbox", ".brz-menu__mmenu"],
        score: 21,
        content: {
          type: "file",
          url: "http://brizy.local/wp-content/plugins/brizy-pro/public/editor-build/dev/js/group-1_2.pro.js",
          attr: {
            class: "brz-script brz-script-preview-lib-pro",
            "data-group": "group-1_2",
          },
        },
        pro: true,
      },
      {
        name: "group-1_3",
        selectors: [".brz-image__gallery", ".brz-posts--masonry", ".brz-image__lightbox", ".brz-lottie"],
        score: 21,
        content: {
          type: "file",
          url: "http://brizy.local/wp-content/plugins/brizy-pro/public/editor-build/dev/js/group-1_3.pro.js",
          attr: {
            class: "brz-script brz-script-preview-lib-pro",
            "data-group": "group-1_3",
          },
        },
        pro: true,
      },
      {
        name: "group-2_3",
        selectors: [".brz-menu__mmenu", ".brz-lottie"],
        score: 21,
        content: {
          type: "file",
          url: "http://brizy.local/wp-content/plugins/brizy-pro/public/editor-build/dev/js/group-2_3.pro.js",
          attr: {
            class: "brz-script brz-script-preview-lib-pro",
            "data-group": "group-2_3",
          },
        },
        pro: true,
      },
      {
        name: "group-all",
        selectors: [
          ".brz-image__gallery",
          ".brz-posts--masonry",
          ".brz-image__lightbox",
          ".brz-menu__mmenu",
          ".brz-lottie",
        ],
        score: 21,
        content: {
          type: "file",
          url: "http://brizy.local/wp-content/plugins/brizy-pro/public/editor-build/dev/js/group-all.pro.js",
          attr: {
            class: "brz-script brz-script-preview-lib-pro",
            "data-group": "group-all",
          },
        },
        pro: true,
      },
    ],
    libsSelectors: [],
  },
};
const { freeStyles, proStyles, freeScripts, proScripts } = assets;

// Create asset groups for scripts and styles
const scriptsAssets = [AssetGroup.instanceFromJsonData(freeScripts)];
const stylesAssets = [AssetGroup.instanceFromJsonData(freeStyles)];

if (proStyles) {
  stylesAssets.push(AssetGroup.instanceFromJsonData(proStyles));
}

if (proScripts) {
  scriptsAssets.push(AssetGroup.instanceFromJsonData(proScripts));
}

// Function to aggregate asset lists
const getAggregatedAssetList = (assets: AssetGroup[]) => {
  const assetAggregator = new AssetAggregator(assets);
  return assetAggregator.getAssetList();
};

// Aggregated lists
const scriptAssetList = getAggregatedAssetList(scriptsAssets);
const styleAssetList = getAggregatedAssetList(stylesAssets);

```

Now these lists contains instances of `Asset` class, which can be used to render the assets in the frontend.

### Example

`Script assets`
```
 [
        AssetLib {
          content: null,
          url: '{@brizy_SITE_URL_PLACEHOLDER@}/wp-content/plugins/brizy/public/editor-build/dev/editor/js/group-jq.js',
          attrs: {
            class: 'brz-script brz-script-preview-lib',
            'data-group': 'group-jq'
          },
          uid: '726e102f-21b4-4e60-ab45-4db426feb6cf',
          name: 'group-jq',
          score: 20,
          type: 'file',
          pro: false,
          selectors: [ '.brz__group__jquery' ]
        },
        BaseAsset {
          content: null,
          url: 'http://brizy.local/wp-content/plugins/brizy-pro/public/editor-build/dev/js/preview.pro.js',
          attrs: { class: 'brz-script brz-script-preview-pro' },
          uid: '629ecf16-2ebf-4837-8c7d-01f54dc07629',
          name: 'main',
          score: 30,
          type: 'file',
          pro: true
        },
        BaseAsset {
          content: 'jQuery(document).ready(function() { window.Brizy.emit("init.dom", jQuery(document.body)); });',
          url: null,
          attrs: { class: 'brz-script brz-script-emit' },
          uid: 'a82223be-f358-48d3-b4c1-c0668def4c8a',
          name: 'initMain',
          score: 40,
          type: 'inline',
          pro: false
        }
      ]
  ```


`Style assets:`

  ```
  [
        BaseAsset {
          content: '<meta name="viewport" content="width=device-width, initial-scale=1">',
          url: null,
          attrs: {},
          uid: '99072136-88bc-4522-b4e9-710a1a026852',
          name: 'metaViewport',
          score: 10,
          type: 'code',
          pro: false
        },
        BaseAsset {
          content: '<link class="brz-link brz-link-google-prefetch" rel="dns-prefetch" href="//ajax.googleapis.com"> <link class="brz-link brz-link-google-prefetch" rel="dns-prefetch" href="//fonts.googleapis.com"> <link class="brz-link brz-link-google-preconnect" rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>',
          url: null,
          attrs: {},
          uid: 'fa2f2527-28e2-4601-8bb6-d8846b731960',
          name: 'projectPrefetchFonts',
          score: 10,
          type: 'code',
          pro: false
        },
        AssetFont {
          content: null,
          url: 'https://fonts.googleapis.com/css?family=Lato:100,100italic,300,300italic,regular,italic,700,700italic,900,900italic|Overpass:100,100italic,200,200italic,300,300italic,regular,italic,600,600italic,700,700italic,800,800italic,900,900italic|Red+Hat+Text:regular,italic,500,500italic,700,700italic|DM+Serif+Text:regular,italic|Blinker:100,200,300,regular,600,700,800,900|Aleo:300,300italic,regular,italic,700,700italic|Nunito:200,200italic,300,300italic,regular,italic,600,600italic,700,700italic,800,800italic,900,900italic|Knewave:regular|Palanquin:100,200,300,regular,500,600,700|Palanquin+Dark:regular,500,600,700|Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic|Oswald:200,300,regular,500,600,700|Oxygen:300,regular,700|Playfair+Display:regular,italic,700,700italic,900,900italic|Fira+Sans:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic|Abril+Fatface:regular|Comfortaa:300,regular,500,600,700|Kaushan+Script:regular|Noto+Serif:regular,italic,700,700italic|Montserrat:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic&subset=arabic,bengali,cyrillic,cyrillic-ext,devanagari,greek,greek-ext,gujarati,hebrew,khmer,korean,latin-ext,tamil,telugu,thai,vietnamese&display=swap',
          attrs: {
            class: 'brz-link brz-link-google',
            type: 'text/css',
            rel: 'stylesheet'
          },
          uid: '61ef1e93-4f98-4037-aaac-21c2b3adf2e3',
          name: 'google',
          score: 10,
          type: 'file',
          pro: false,
          fontType: 'google-font'
        },
        BaseAsset {
          content: null,
          url: 'http://brizy.local/wp-content/plugins/brizy-pro/public/editor-build/dev/css/preview.pro.css',
          attrs: { class: 'brz-link brz-link-preview-pro', rel: 'stylesheet' },
          uid: '653eb309-a72c-408f-a629-522a53e06f4d',
          name: 'main',
          score: 30,
          type: 'file',
          pro: true
        },
        BaseAsset {
          content: '<style class="brz-style"></style><style class="brz-style">.brz .brz-css-bxphg{z-index: auto;margin:0;}.brz .brz-css-bxphg.brz-section .brz-section__content{min-height: auto;display:flex;}.brz .brz-css-bxphg .brz-container{justify-content:center;}.brz .brz-css-bxphg > .slick-slider > .brz-slick-slider__dots{color: rgba(0, 0, 0, 1);}.brz .brz-css-bxphg > .slick-slider > .brz-slick-slider__arrow{color: rgba(0, 0, 0, 0.7);}@media(min-width:991px){.brz .brz-css-bxphg{display:block;}}@media(min-width:991px){.brz .brz-css-bxphg > .slick-slider > .brz-slick-slider__arrow:hover{color: rgba(0, 0, 0, 1);}}@media(max-width:991px) and (min-width:768px){.brz .brz-css-bxphg{z-index: auto;margin:0;}.brz .brz-css-bxphg.brz-section .brz-section__content{min-height: auto;display:flex;}.brz .brz-css-bxphg .brz-container{justify-content:center;}.brz .brz-css-bxphg > .slick-slider > .brz-slick-slider__dots{color: rgba(0, 0, 0, 1);}.brz .brz-css-bxphg > .slick-slider > .brz-slick-slider__arrow{color: rgba(0, 0, 0, 0.7);}}@media(max-width:991px) and (min-width:768px){.brz .brz-css-bxphg{display:block;}}@media(max-width:767px){.brz .brz-css-bxphg{z-index: auto;margin:0;}.brz .brz-css-bxphg.brz-section .brz-section__content{min-height: auto;display:flex;}.brz .brz-css-bxphg .brz-container{justify-content:center;}.brz .brz-css-bxphg > .slick-slider > .brz-slick-slider__dots{color: rgba(0, 0, 0, 1);}.brz .brz-css-bxphg > .slick-slider > .brz-slick-slider__arrow{color: rgba(0, 0, 0, 0.7);}}@media(max-width:767px){.brz .brz-css-bxphg{display:block;}}\n' +
            '.brz .brz-css-pqvdv{padding:75px 0px 75px 0px;}.brz .brz-css-pqvdv > .brz-bg{border:0px solid rgba(102, 115, 141, 0);border-radius:0;}.brz .brz-css-pqvdv > .brz-bg > .brz-bg-image{background-image:none;display: block;}.brz .brz-css-pqvdv > .brz-bg > .brz-bg-image:after{content: "";background-image:none;}.brz .brz-css-pqvdv > .brz-bg > .brz-bg-color{background-color:rgba(0, 0, 0, 0);background-image:none;}.brz .brz-css-pqvdv > .brz-bg > .brz-bg-map{display: none;}.brz .brz-css-pqvdv > .brz-bg > .brz-bg-video{display: none;}.brz .brz-css-pqvdv > .brz-bg > .brz-bg-shape__top{background-image: none;background-size: 100% 100px; height: 100px;transform: rotateX(0deg) rotateY(0deg);z-index: auto;}.brz .brz-css-pqvdv > .brz-bg > .brz-bg-shape__bottom{background-image: none;background-size: 100% 100px; height: 100px;transform: rotateX(-180deg) rotateY(-180deg);z-index: auto;}@media(min-width:991px){.brz .brz-css-pqvdv > .brz-bg > .brz-bg-image{background-attachment:scroll;}}@media(max-width:991px) and (min-width:768px){.brz .brz-css-pqvdv{padding:50px 15px 50px 15px;}.brz .brz-css-pqvdv > .brz-bg{border:0px solid rgba(102, 115, 141, 0);border-radius:0;}.brz .brz-css-pqvdv > .brz-bg > .brz-bg-image{background-image:none;display: block;}.brz .brz-css-pqvdv > .brz-bg > .brz-bg-image:after{content: "";background-image:none;}.brz .brz-css-pqvdv > .brz-bg > .brz-bg-color{background-color:rgba(0, 0, 0, 0);background-image:none;}.brz .brz-css-pqvdv > .brz-bg > .brz-bg-map{display: none;}.brz .brz-css-pqvdv > .brz-bg > .brz-bg-video{display: none;}.brz .brz-css-pqvdv > .brz-bg > .brz-bg-shape__top{background-image: none;background-size: 100% 100px; height: 100px;transform: rotateX(0deg) rotateY(0deg);z-index: auto;}.brz .brz-css-pqvdv > .brz-bg > .brz-bg-shape__bottom{background-image: none;background-size: 100% 100px; height: 100px;transform: rotateX(-180deg) rotateY(-180deg);z-index: auto;}}@media(max-width:767px){.brz .brz-css-pqvdv{padding:25px 15px 25px 15px;}.brz .brz-css-pqvdv > .brz-bg{border:0px solid rgba(102, 115, 141, 0);border-radius:0;}.brz .brz-css-pqvdv > .brz-bg > .brz-bg-image{background-image:none;display: block;}.brz .brz-css-pqvdv > .brz-bg > .brz-bg-image:after{content: "";background-image:none;}.brz .brz-css-pqvdv > .brz-bg > .brz-bg-color{background-color:rgba(0, 0, 0, 0);background-image:none;}.brz .brz-css-pqvdv > .brz-bg > .brz-bg-map{display: none;}.brz .brz-css-pqvdv > .brz-bg > .brz-bg-video{display: none;}.brz .brz-css-pqvdv > .brz-bg > .brz-bg-shape__top{background-image: none;background-size: 100% 100px; height: 100px;transform: rotateX(0deg) rotateY(0deg);z-index: auto;}.brz .brz-css-pqvdv > .brz-bg > .brz-bg-shape__bottom{background-image: none;background-size: 100% 100px; height: 100px;transform: rotateX(-180deg) rotateY(-180deg);z-index: auto;}}\n' +
            '.brz .brz-css-hpcmo{border:0px solid transparent;}@media(min-width:991px){.brz .brz-css-hpcmo{max-width: calc(1 * var(--brz-section-container-max-width, 1170px));}}@media(max-width:991px) and (min-width:768px){.brz .brz-css-hpcmo{border:0px solid transparent;}}@media(max-width:991px) and (min-width:768px){.brz .brz-css-hpcmo{max-width: 100%}}@media(max-width:767px){.brz .brz-css-hpcmo{border:0px solid transparent;}}@media(max-width:767px){.brz .brz-css-hpcmo{max-width: 100%}}\n' +
            '.brz .brz-css-idipn{padding:0;margin:10px 0px 10px 0px;justify-content:center;position:relative;}@media(min-width:991px){.brz .brz-css-idipn{display:flex;z-index: auto;position:relative;}}@media(max-width:991px) and (min-width:768px){.brz .brz-css-idipn{padding:0;margin:10px 0px 10px 0px;justify-content:center;position:relative;}}@media(max-width:991px) and (min-width:768px){.brz .brz-css-idipn{display:flex;z-index: auto;position:relative;}}@media(max-width:767px){.brz .brz-css-idipn{padding:0;margin:10px 0px 10px 0px;justify-content:center;position:relative;}}@media(max-width:767px){.brz .brz-css-idipn{display:flex;z-index: auto;position:relative;}}\n' +
            '.brz .brz-css-eqnqt{width:100%;background-color:rgba(0, 0, 0, 0);border:0px solid rgba(102, 115, 141, 0);}.brz .brz-css-eqnqt .brz-comments__name{color:rgba(161, 112, 217, 1);font-family:Lato, sans-serif;font-size:20px;line-height:1.3;font-weight:600;letter-spacing:-0.1px;}.brz .brz-css-eqnqt .brz-comments__date{color:rgba(102, 102, 102, 0.75);font-family:Lato, sans-serif;font-size:15px;line-height:1.3;font-weight:500;letter-spacing:0px;}.brz .brz-css-eqnqt .brz-comments__reply{font-family:Lato, sans-serif !important;font-size:15px !important;line-height:1.3 !important;font-weight:600 !important;letter-spacing:0px !important;}.brz .brz-css-eqnqt .brz-comment-awaiting-moderation{color:rgba(102, 102, 102, 0.75);font-family:Lato, sans-serif;font-size:15px;line-height:1.9;font-weight:400;letter-spacing:0.5px;}.brz .brz-css-eqnqt .brz-comments__text{color:rgba(102, 102, 102, 0.75);font-family:Lato, sans-serif;font-size:15px;line-height:1.9;font-weight:400;letter-spacing:0.5px;}.brz .brz-css-eqnqt .comment-reply-link{font-family:Lato, sans-serif !important;font-size:15px !important;line-height:1.3 !important;font-weight:600 !important;letter-spacing:0px !important;}.brz .brz-css-eqnqt .brz-comment-respond .brz-submit{color:rgba(235, 235, 235, 1);background-color:rgba(61, 191, 232, 1);font-family:Lato, sans-serif !important;font-size:16px !important;line-height:1 !important;font-weight:600 !important;letter-spacing:-0.1px !important;}.brz .brz-css-eqnqt .brz-comments__logo .brz-img{width: 50px !important; height: 50px;}.brz .brz-css-eqnqt .brz-comments__right-date{width: calc(100% - 60px);}.brz .brz-css-eqnqt .brz-logged-in-as a, .brz-css-eqnqt .nav-links a, .brz-css-eqnqt .comment-reply-link, .brz-css-eqnqt #cancel-comment-reply-link{color:rgba(61, 191, 232, 1) !important;}.brz .brz-css-eqnqt .brz-comments.brz-parent .brz-comments{margin-left:60px;}.brz .brz-css-eqnqt .brz-comment-reply-title, .brz-css-eqnqt .brz-comment-form-comment > label{font-family:Lato, sans-serif;}.brz .brz-css-eqnqt .review .brz-comments__rating .star-rating{font-size:16px;color:rgba(255, 185, 0, 1);}.brz .brz-css-eqnqt .review .brz-comments__rating .star-rating:before{color:rgba(255, 185, 0, 0.7);}.brz .brz-css-eqnqt .stars a{font-size:16px;color:rgba(255, 185, 0, 0.7);}.brz .brz-css-eqnqt .stars:hover a::before{color:rgba(255, 185, 0, 1);}.brz .brz-css-eqnqt .stars a:hover{color:rgba(255, 185, 0, 1);}.brz .brz-css-eqnqt .stars a:hover ~ a::before{color:rgba(255, 185, 0, 0.7);}.brz .brz-css-eqnqt .stars a.active ~ a::before{color:rgba(255, 185, 0, 0.7);}.brz .brz-css-eqnqt .selected a::before{color:rgba(255, 185, 0, 1);}@media(min-width:991px){.brz .brz-css-eqnqt{transition-duration:0.50s;transition-property:color,border,box-shadow;}.brz .brz-css-eqnqt .brz-comments__name{transition-duration:0.50s;transition-property:color,border,box-shadow;}.brz .brz-css-eqnqt .brz-comment-awaiting-moderation{transition-duration:0.50s;transition-property:color,border,box-shadow;}.brz .brz-css-eqnqt .brz-comments__text{transition-duration:0.50s;transition-property:color,border,box-shadow;}}@media(max-width:991px) and (min-width:768px){.brz .brz-css-eqnqt{width:100%;background-color:rgba(0, 0, 0, 0);border:0px solid rgba(102, 115, 141, 0);}.brz .brz-css-eqnqt .brz-comments__name{color:rgba(161, 112, 217, 1);font-size:20px;line-height:1.3;font-weight:600;letter-spacing:-0.1px;}.brz .brz-css-eqnqt .brz-comments__date{color:rgba(102, 102, 102, 0.75);font-size:15px;line-height:1.3;font-weight:500;letter-spacing:0px;}.brz .brz-css-eqnqt .brz-comments__reply{font-size:15px !important;line-height:1.3 !important;font-weight:600 !important;letter-spacing:0px !important;}.brz .brz-css-eqnqt .brz-comment-awaiting-moderation{color:rgba(102, 102, 102, 0.75);font-size:15px;line-height:1.9;font-weight:400;letter-spacing:0.5px;}.brz .brz-css-eqnqt .brz-comments__text{color:rgba(102, 102, 102, 0.75);font-size:15px;line-height:1.9;font-weight:400;letter-spacing:0.5px;}.brz .brz-css-eqnqt .comment-reply-link{font-size:15px !important;line-height:1.3 !important;font-weight:600 !important;letter-spacing:0px !important;}.brz .brz-css-eqnqt .brz-comment-respond .brz-submit{color:rgba(235, 235, 235, 1);background-color:rgba(61, 191, 232, 1);font-size:15px !important;line-height:1.3 !important;font-weight:600 !important;letter-spacing:0px !important;}.brz .brz-css-eqnqt .brz-comments__logo .brz-img{width: 50px !important; height: 50px;}.brz .brz-css-eqnqt .brz-comments__right-date{width:'... 4389 more characters,
          url: null,
          attrs: {},
          uid: 'b048c7ee-7400-401e-839f-e84e2446c965',
          name: '-2140421345',
          score: 50,
          type: 'code',
          pro: false
        },
        BaseAsset {
          content: '.brz .brz-cp-color1, .brz .brz-bcp-color1{color: #A170D9;}.brz .brz-cp-color2, .brz .brz-bcp-color2{color: #1C1C1C;}.brz .brz-cp-color3, .brz .brz-bcp-color3{color: #05CAB6;}.brz .brz-cp-color4, .brz .brz-bcp-color4{color: #B8E6E1;}.brz .brz-cp-color5, .brz .brz-bcp-color5{color: #F5D4D1;}.brz .brz-cp-color6, .brz .brz-bcp-color6{color: #EBEBEB;}.brz .brz-cp-color7, .brz .brz-bcp-color7{color: #666666;}.brz .brz-cp-color8, .brz .brz-bcp-color8{color: #FFFFFF;}',
          url: null,
          attrs: { class: 'brz-style brz-project__style-palette' },
          uid: 'b1077637-679b-4a58-bfe3-efa214592ec8',
          name: 'projectPalette',
          score: 50,
          type: 'inline',
          pro: false
        },
        BaseAsset {
          content: '',
          url: null,
          attrs: { class: 'brz-style brz-project__style-fonts' },
          uid: '27b66eda-f32b-4a28-b8c8-7d11e8680b78',
          name: '0',
          score: 50,
          type: 'inline',
          pro: false
        }
      ]

```

Now you can use these lists to render the assets in the frontend.

## API Reference: `BaseAsset`

The `BaseAsset` class represents an asset with various types, including inline content, code, or a file. It provides methods to manage asset properties such as name, score, content, type, URL, and attributes.

### Static Properties

- `BaseAsset.TYPE_INLINE` - Represents an inline asset.
- `BaseAsset.TYPE_CODE` - Represents a code asset.
- `BaseAsset.TYPE_FILE` - Represents a file asset.

### Constructor

#### `new BaseAsset(asset: Asset)`
Creates a new `BaseAsset` instance.

**Parameters:**
- `asset: Asset` – The asset object containing:
  - `name: string` – The name of the asset.
  - `score: number` – The asset’s score.
  - `content: { type: AssetType, content?: string, url?: string, attr?: Record<string, string> }` – The content of the asset.
  - `pro: boolean` – Indicates if the asset is a premium asset.

### Instance Methods

#### `getUid(): string`
Returns the unique identifier of the asset.

#### `getName(): string`
Returns the name of the asset.

#### `setName(name: string): this`
Sets the name of the asset and returns the instance.

#### `getScore(): number`
Returns the score of the asset.

#### `setScore(score: number): this`
Sets the score of the asset and returns the instance.

#### `getContent(): string | null`
Returns the content of the asset if applicable.

#### `setContent(content: string | null): this`
Sets the content of the asset if applicable and returns the instance.

#### `isPro(): boolean`
Returns `true` if the asset is a pro asset, otherwise `false`.

#### `setPro(pro: boolean): this`
Sets the asset as premium or non-premium and returns the instance.

#### `getType(): AssetType`
Returns the type of the asset.

#### `setType(type: AssetType): this`
Sets the type of the asset and returns the instance.

#### `getUrl(): string | null`
Returns the URL of the asset if applicable.

#### `setUrl(url: string): this`
Sets the URL of the asset and returns the instance.

#### `getAttrs(): Record<string, unknown>`
Returns the attributes of the asset.

#### `setAttrs(attrs: Record<string, string>): this`
Sets the attributes of the asset and returns the instance.

### Example Usage

```typescript
const assetData: Asset = {
  name: "Sample Asset",
  score: 10,
  content: { type: BaseAsset.TYPE_CODE, content: "console.log('Hello World');" },
  pro: false,
};

const baseAsset = new BaseAsset(assetData);
console.log(baseAsset.getName()); // Output: Sample Asset
baseAsset.setScore(20);
console.log(baseAsset.getScore()); // Output: 20
```
---

## API Reference: `AssetGroup`

The `AssetGroup` class represents a collection of assets grouped together for organization and management.

### Constructor

#### `new AssetGroup(data: GroupedAssets)`
Creates a new `AssetGroup` instance.

**Parameters:**
- `data: GroupedAssets` – The grouped assets object containing:
  - `main: BaseAsset | null` – The main asset.
  - `generic: BaseAsset[]` – A list of generic assets.
  - `libsMap: AssetLib[]` – A list of library assets.
  - `libsSelectors: string[]` – A list of library selectors.
  - `pageFonts: AssetFont[]` – A list of font assets.
  - `pageStyles: BaseAsset[]` – A list of style assets.

### Static Methods

#### `AssetGroup.instanceFromJsonData(data: Record<string, unknown>): AssetGroup`
Creates an `AssetGroup` instance from JSON data.

**Parameters:**
- `data: Record<string, unknown>` – The JSON object representing the asset group.

**Returns:**
- `AssetGroup` – A new instance of `AssetGroup`.

### Instance Methods

#### `getMain(): BaseAsset | null`
Returns the main asset of the group.

#### `setMain(main: BaseAsset): this`
Sets the main asset and returns the instance.

#### `getGeneric(): BaseAsset[]`
Returns the list of generic assets.

#### `setGeneric(generic: BaseAsset[]): this`
Sets the list of generic assets and returns the instance.

#### `getLibsMap(): AssetLib[]`
Returns the list of library assets.

#### `setLibsMap(libsMap: AssetLib[]): this`
Sets the list of library assets and returns the instance.

#### `getLibsSelectors(): string[]`
Returns the list of library selectors.

#### `setLibsSelectors(libsSelectors: string[]): this`
Sets the list of library selectors and returns the instance.

#### `getPageFonts(): AssetFont[]`
Returns the list of page font assets.

#### `setPageFonts(pageFonts: AssetFont[]): this`
Sets the list of page font assets and returns the instance.

#### `getPageStyles(): BaseAsset[]`
Returns the list of page style assets.

#### `setPageStyles(pageStyles: BaseAsset[]): this`
Sets the list of page style assets and returns the instance.

### Example Usage

```typescript
const assetGroupData = {
  main: baseAsset,
  generic: [],
  libsMap: [],
  libsSelectors: [],
  pageFonts: [],
  pageStyles: [],
};

const assetGroup = new AssetGroup(assetGroupData);
console.log(assetGroup.getMain()?.getName()); // Output: Main Asset
```

---

## API Reference: `AssetAggregator`

The `AssetAggregator` class is responsible for aggregating multiple assets into a single collection.

### Constructor

#### `new AssetAggregator(assets: BaseAsset[])`
Creates a new `AssetAggregator` instance.

**Parameters:**
- `assets: BaseAsset[]` – An array of `BaseAsset` instances to be aggregated.

### Instance Methods

#### `addAssetGroup(group: AssetGroupt): void`
Adds an AssetGroup to the internal list of groups

#### `setAssetsGroups(groups: AssetGroup[]): void`
Replaces the current list of asset groups with a new array.

#### `getAssetList(): BaseAsset[]`
Returns a list of assets that are ready to be included on a page.
Aggregates, normalizes, and sorts assets to optimize their usage.

### Example Usage

```typescript
const aggregator = new AssetAggregator([]);
aggregator.addAssetGroup(assetGroup);
aggregator.addAssetGroup(assetGroup);

const assetList = aggregator.getAssetList();

console.log(assetList.length); // Output: 1 (because the duplicate group was removed)
```
