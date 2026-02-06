import { page } from "./documents/page";
import { product } from "./documents/product";
import { category } from "./documents/category";
import { subCategory } from "./documents/subCategory";
import { journal } from "./documents/journal";

import { heroBlock } from "./objects/heroBlock";
import { categoryIntroBlock } from "./objects/categoryIntroBlock";
import { featuredBlock } from "./objects/featuredBlock";
import { imageWithMeta } from "./objects/imageWithMeta";

export const schemaTypes = [
  page,
  product,
  category,
  subCategory,
  journal,
  heroBlock,
  categoryIntroBlock,
  featuredBlock,
  imageWithMeta,
];
