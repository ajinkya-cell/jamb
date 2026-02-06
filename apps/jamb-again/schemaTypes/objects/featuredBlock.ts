import { defineType, defineField } from "sanity";

export const featuredBlock = defineType({
  name: "featuredBlock",
  title: "Featured Content",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "items",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            { type: "product" },
            { type: "journal" },
          ],
        },
      ],
    }),

    defineField({
      name: "aspectRatio",
      type: "string",
      options: {
        list: [
          { title: "Square (1:1)", value: "1/1" },
          { title: "Portrait (3:4)", value: "3/4" },
          { title: "Landscape (4:3)", value: "4/3" },
        ],
      },
      initialValue: "1/1",
    }),
  ],
});
