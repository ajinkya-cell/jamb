import { defineType, defineField } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
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
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "subCategory",
      type: "reference",
      to: [{ type: "subCategory" }],
      description: "Only subcategories from selected category will appear",
      options: {
        filter: ({ document }) => {
          //@ts-ignore
          const categoryRef = document?.category?._ref;

          if (!categoryRef) {
            return {
              filter: `_type == "subCategory"`,
            };
          }

          return {
            filter: `_type == "subCategory" && category._ref == $categoryId`,
            params: {
              categoryId: categoryRef,
            },
          };
        },
      },
    }),

    defineField({
      name: "image",
      type: "imageWithMeta",
    }),

    defineField({
      name: "price",
      type: "number",
    }),
  ],
});
