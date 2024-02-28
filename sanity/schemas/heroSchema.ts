import { unsplashAssetSource } from "sanity-plugin-asset-source-unsplash";

const heroSchema = {
  title: "Hero",
  name: "heroSchema",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: "Subtitle",
      name: "subtitle",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: "Background Image",
      name: "backgroundImage",
      type: "image",
      options: { hotspot: true, sources: [unsplashAssetSource] },
      validation: (Rule: any) => Rule.required(),
    },
  ],
};

export default heroSchema;
