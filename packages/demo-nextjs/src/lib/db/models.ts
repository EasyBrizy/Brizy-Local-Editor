import mongoose from "mongoose";

const PageSchema = new mongoose.Schema({
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

const HeaderSchema = new mongoose.Schema({
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

const FooterSchema = new mongoose.Schema({
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

const StorySchema = new mongoose.Schema({
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

const PopupSchema = new mongoose.Schema({
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

const Pages = mongoose.models.Pages || mongoose.model("Pages", PageSchema);
const Project = mongoose.models.Project || mongoose.model("Project", ProjectSchema);
const Header = mongoose.models.Header || mongoose.model("Header", HeaderSchema);
const Footer = mongoose.models.Footer || mongoose.model("Footer", FooterSchema);
const Story = mongoose.models.Story || mongoose.model("Story", StorySchema);
const Popup = mongoose.models.Popup || mongoose.model("Popup", PopupSchema);

const models = {
  Header,
  Footer,
  Pages,
  Project,
  Story,
  Popup,
};

export default models;
