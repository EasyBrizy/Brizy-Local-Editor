import { AssetFont } from "../assets/AssetFont";
import { AssetFonts, AssetType, FontType } from "../assets/types";

const assets: AssetFonts[] = [
  {
    name: "google",
    score: 30,
    content: {
      type: AssetType.File,
      url: "https://fonts.googleapis.com/css?family=Lato:100,100italic,300,300italic,regular,italic,700,700italic,900,900italic|Overpass:100,100italic,200,200italic,300,300italic,regular,italic,600,600italic,700,700italic,800,800italic,900,900italic|Red+Hat+Text:regular,italic,500,500italic,700,700italic|DM+Serif+Text:regular,italic|Blinker:100,200,300,regular,600,700,800,900|Aleo:300,300italic,regular,italic,700,700italic|Nunito:200,200italic,300,300italic,regular,italic,600,600italic,700,700italic,800,800italic,900,900italic|Knewave:regular|Palanquin:100,200,300,regular,500,600,700|Palanquin+Dark:regular,500,600,700|Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic|Oswald:200,300,regular,500,600,700|Oxygen:300,regular,700|Playfair+Display:regular,italic,700,700italic,900,900italic|Fira+Sans:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic|Abril+Fatface:regular|Comfortaa:300,regular,500,600,700|Kaushan+Script:regular|Noto+Serif:regular,italic,700,700italic|Montserrat:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic&subset=arabic,bengali,cyrillic,cyrillic-ext,devanagari,greek,greek-ext,gujarati,hebrew,khmer,korean,latin-ext,tamil,telugu,thai,vietnamese&display=swap",
      attr: {
        class: "brz-link brz-link-google",
        type: "text/css",
        rel: "stylesheet",
      },
    },
    pro: false,
    type: FontType.GOOGLE,
  },
  {
    name: "upload",
    score: 40,
    content: {
      type: AssetType.File,
      url: "https://cloud-1de12d.b-cdn.net/fonts/style.css?cloud-font=vTGl2Jw1eMsc:400",
    },
    pro: true,
    type: FontType.UPLOADED,
  },
];

test.each(assets)("Test AssetFont instanceFromJsonData", (data) => {
  const asset = new AssetFont(data);

  expect(asset.getName()).toBe(data.name);
  expect(asset.getScore()).toBe(data.score);
  expect(asset.getType()).toBe(data.content.type);
  expect(asset.getUrl()).toBe(data.content.url);
  expect(asset.isPro()).toBe(data.pro);
  expect(asset.getFontType()).toBe(data.type);
});
