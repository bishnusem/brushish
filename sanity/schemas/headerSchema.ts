import { unsplashAssetSource } from "sanity-plugin-asset-source-unsplash";

const headerSchema = {
  title: "Header",
  name: "headerSchema",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
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
    {
      name: "logoColor",
      title: "LogoColor",
      type: "string",
      initialValue: "black",
      validation: (Rule: any) => Rule.required(),
      options: {
        list: [
          { title: "black", value: "black" },
          { title: "white", value: "white" },
        ],
      },
    },
  ],
};

export default headerSchema;
