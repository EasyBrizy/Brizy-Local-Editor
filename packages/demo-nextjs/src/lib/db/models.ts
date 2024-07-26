import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  slug: {
    item: String,
    collection: String,
  },
  data: {
    type: String,
    required: false,
    trim: true,
  },
});

const ProjectSchema = new mongoose.Schema({
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

const Items = mongoose.models.Items || mongoose.model("Items", ItemSchema);
const Project = mongoose.models.Project || mongoose.model("Project", ProjectSchema);

const models = {
  Items,
  Project,
};

export default models;
