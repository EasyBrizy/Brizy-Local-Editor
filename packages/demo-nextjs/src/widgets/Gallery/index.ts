import { Brizy } from "@brizy/core";
import { default as Editor } from "./index.editor";
import { default as View } from "./index.preview";
import "./index.scss";
import { default as getToolbar } from "./toolbar";

const Gallery = { Editor, View };
export default Gallery;

Brizy.registerComponent({
  id: "Brizy.ThirdParty.Gallery",
  component: {
    editor: Editor,
    view: View,
  },
  title: "Gallery2",
  icon: "nc-woo-gallery",
  category: "custom",
  options: getToolbar,
});
