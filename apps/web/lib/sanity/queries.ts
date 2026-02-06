import { groq } from "next-sanity";

export const homePageQuery = groq`
*[_type == "page" ][1]{
  pageBuilder[]{
    _type,

    _type == "heroBlock" => {
      "imageUrl": image.asset->url
    },

   _type == "categoryIntroBlock" => {
  titleOverride,
  descriptionOverride,
  background,
  "imageUrl": image.asset->url,

  primaryCta{
    label,
    href
  },

  secondaryCta{
    label,
    href
  },

  category->{
    title,
    "slug": slug.current
  }
},


   _type == "featuredBlock" => {
  heading,
  aspectRatio,

  items[]->{
    _type,
    title,

    // PRODUCT-SPECIFIC FIELDS
     _type == "product" => {
          price,
          "type": subCategory->title,
          "imageUrl": image.asset->url
        },

    // JOURNAL-SPECIFIC FIELDS
    _type == "journal" => {
      excerpt,
      "imageUrl": image.asset->url
    }
  }
}

  }
}
`;
