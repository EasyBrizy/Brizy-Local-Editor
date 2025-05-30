import { Brizy } from "@brizy/core";
import { default as Editor } from "./index.editor";
import { default as View } from "./index.preview";
import { default as getToolbar } from "./toolbar";
import "./index.scss";

const Gallery = { Editor, View };
export default Gallery;

Brizy.registerComponent({
  id: "Brizy.ThirdParty.MYGallery",
  component: {
    editor: Editor,
    view: View,
  },
  title: "MYGallery",
  icon: "nc-counter-outline",
  category: "custom",
  options: getToolbar,
});

