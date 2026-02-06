import { defineType, defineField } from "sanity";

export const journal = defineType({
  name: "journal",
  title: "Journal",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "category",
      type: "reference",
      to: [{ type: "category" }],
      description: "Should be set to Journal",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "image",
      type: "imageWithMeta",
    }),

    defineField({
      name: "excerpt",
      type: "text",
      rows: 3,
    }),
  ],
});
