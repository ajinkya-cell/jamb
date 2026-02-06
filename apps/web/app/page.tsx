import { client } from "@/lib/sanity/client";
import { homePageQuery } from "@/lib/sanity/queries";
import { Navbar } from "@/components/Navbar";
import PageBuilder from "@/components/pageBuilder/PageBuilder";
import Footer from "@/components/footer";

export default async function HomePage() {
  const data = await client.fetch(
    homePageQuery,
    {},
    {
      next: { revalidate: 60 },
    }
  );

  return (
    <>
      <Navbar />
      <PageBuilder blocks={data.pageBuilder} />
      <Footer/>
    </>
  );
}
