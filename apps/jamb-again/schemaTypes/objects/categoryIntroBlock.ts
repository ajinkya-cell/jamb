import { defineType, defineField } from "sanity";

export const categoryIntroBlock = defineType({
  name: "categoryIntroBlock",
  title: "Category Introduction",
  type: "object",
  fields: [
    defineField({
      name: "category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "titleOverride",
      type: "string",
    }),

    defineField({
      name: "descriptionOverride",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "image",
      type: "imageWithMeta",
    }),

    // 👇 PRIMARY CTA
    defineField({
      name: "primaryCta",
      title: "Primary CTA",
      type: "object",
      fields: [
        defineField({
          name: "label",
          type: "string",
        }),
        defineField({
          name: "href",
          type: "string",
        }),
      ],
    }),

    // 👇 SECONDARY CTA
    defineField({
      name: "secondaryCta",
      title: "Secondary CTA",
      type: "object",
      fields: [
        defineField({
          name: "label",
          type: "string",
        }),
        defineField({
          name: "href",
          type: "string",
        }),
      ],
    }),

    // background (from previous step)
    defineField({
      name: "background",
      title: "Background Style",
      type: "string",
      options: {
        list: [
          { title: "Default", value: "default" },
          { title: "Muted", value: "muted" },
          { title: "Dark", value: "dark" },
        ],
        layout: "radio",
      },
      initialValue: "default",
    }),
  ],
});
