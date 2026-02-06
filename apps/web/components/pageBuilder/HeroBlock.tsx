import Link from "next/link";

export default function HeroBlock({ data }: { data: any }) {
  return (
    <div>
      <main className="w-full bg-[#F4F0ED] px-0 md:px-10">
        {data.imageUrl && (
          <img
            src={data.imageUrl}
            alt="Home page image"
            className="w-full h-[45vh] sm:h-[55vh] md:h-auto object-cover"
          />
        )}
      </main>

      <div
        style={{
          WebkitTextStroke: "0.35px currentColor",
        }}
        className="
          text-[#9C9C9D]
          pt-6
          bg-[#F4F0ED]
          md:pt-[29px]
          font-galaxie
          text-[14px]
          sm:text-[15px]
          md:text-[16px]
          text-center
          flex
          flex-wrap
          justify-center
        "
      >
        <Link href="#fireplaces" className="px-2 hover:text-black">
          Fireplaces
        </Link>
        <span className="hidden sm:inline">|</span>

        <Link href="#lighting" className="px-2 hover:text-black">
          Lighting
        </Link>
        <span className="hidden sm:inline">|</span>

        <Link href="#furniture" className="px-2 hover:text-black">
          Furniture
        </Link>
        <span className="hidden sm:inline">|</span>

        <Link href="#journal" className="px-2 hover:text-black">
          Journal
        </Link>
      </div>
    </div>
  );
}
