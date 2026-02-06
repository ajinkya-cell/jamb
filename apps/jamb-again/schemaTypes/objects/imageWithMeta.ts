import { defineType } from "sanity";

export const imageWithMeta = defineType({
  name: "imageWithMeta",
  type: "image",
  fields: [
    {
      name: "alt",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
});
