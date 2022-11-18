import { BuilderC } from "@builder/core";
import { projectData, pageData } from "./utils/dummyData";

const node = document.getElementById("root");

if (node) {
  const config = {
    pageData: pageData,
    projectData: projectData,
    urls: {
      getMedia: "",
      setMedia: "",
      setLeads: "",
      editorAssets: "",
    },
  };

  const builder = new BuilderC(node, config);

  console.log(builder);
}
