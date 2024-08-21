import mongoose from "mongoose";

const ItemSchemaType = {
  slug: {
    item: String,
    collection: String,
  },
  config: {
    hasPreview: Boolean,
    deletable: {
      type: Boolean,
      required: false,
    },
  },
  data: {
    type: String,
    required: false,
    trim: true,
  },
} as const;

const ItemSchema = new mongoose.Schema(ItemSchemaType, {
  timestamps: true,
});

const ProjectSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    data: {
      type: String,
      required: false,
      trim: true,
    },
    settings: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const Items = mongoose.models.Items || mongoose.model("Items", ItemSchema);
const Project = mongoose.models.Project || mongoose.model("Project", ProjectSchema);

const models = {
  Items,
  Project,
};

export default models;
