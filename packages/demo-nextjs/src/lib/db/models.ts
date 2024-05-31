import mongoose from "mongoose";

const PageDataSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  data: {
    type: String,
    required: false,
    trim: true,
  },
});

const ProjectDataSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  data: {
    type: String,
    required: false,
    trim: true,
  },
});

const PageData = mongoose.models.PageData || mongoose.model("PageData", PageDataSchema);
const ProjectData = mongoose.models.ProjectData || mongoose.model("ProjectData", ProjectDataSchema);

const models = {
  PageData,
  ProjectData,
};

export default models;
