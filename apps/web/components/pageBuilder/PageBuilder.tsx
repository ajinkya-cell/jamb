import HeroBlock from "./HeroBlock";
import CategoryIntroBlock from "./CategoryIntroBlock";
import FeaturedBlock from "./FeaturedBlock";

export default function PageBuilder({ blocks }: { blocks: any[] }) {
  return (
    <>
      {blocks?.map((block, i) => {
        switch (block._type) {
          case "heroBlock":
            return <HeroBlock key={i} data={block} />;

          case "categoryIntroBlock":
            return <CategoryIntroBlock key={i} data={block} />;

          case "featuredBlock":
            return <FeaturedBlock key={i} data={block} />;

          default:
            return null;
        }
      })}
    </>
  );
}
