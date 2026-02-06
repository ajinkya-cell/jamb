import { defineType, defineField } from "sanity";

export const heroBlock = defineType({
  name: "heroBlock",
  title: "Hero Section",
  type: "object",
  fields: [
    defineField({
      name: "eyebrow",
      type: "string",
      description: "Small text above heading (optional)",
    }),

    defineField({
      name: "heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      type: "text",
      rows: 3,
    }),

    

    defineField({
      name: "image",
      type: "imageWithMeta",
    }),

    defineField({
      name: "layout",
      type: "string",
      options: {
        list: [
          { title: "Text Left / Image Right", value: "textLeft" },
          { title: "Image Full Width", value: "fullImage" },
        ],
      },
      initialValue: "textLeft",
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare({ title }) {
      return { title: `Hero: ${title}` };
    },
  },
});
