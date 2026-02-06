import Image from "next/image";

export default function FeaturedBlock({ data }: { data: any }) {
  const aspectClass =
    data.aspectRatio === "3/4"
      ? "aspect-[3/4]"
      : data.aspectRatio === "4/3"
      ? "aspect-[4/3]"
      : "aspect-square";

  return (
    <section className="bg-[#E3E3E3]">
      {/* editorial margins */}
      <div className="px-[64px] lg:px-[96px] xl:px-[120px] pt-6 pb-8">

        <div className="flex justify-center mb-6">
          <h2 
          style={{
              WebkitTextStroke: '0.25px currentColor',
              textShadow: '0 0 0.4px currentColor',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
            }}
          className="font-galaxie text-black text-[21px]">
            {data.heading}
          </h2>
        </div>

        {/* adaptive grid */}
        <div
          className="
            grid
            grid-cols-[repeat(auto-fit,minmax(220px,1fr))]
            gap-x-[39px]
            gap-y-[48px]
            w-full
          "
        >
          {data.items?.map((item: any) => (
            <div key={item.title} className="group cursor-pointer">
              <div
                className={`relative ${aspectClass} flex items-center justify-center`}
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="mt-4 flex flex-col items-center font-galaxie">
                <span 
                style={{
              WebkitTextStroke: '0.30px currentColor',
              textShadow: '0 0 0.4px currentColor',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
            }}
                className="text-[16px] text-[#737373] mb-1">
                  {item.title}
                </span>

                {/* PRODUCT */}
                {item._type === "product" && item.type && (
                  <span className="text-sm text-[#737373]">
                    {item.type}
                  </span>
                )}

                {/* JOURNAL */}
                {item._type === "journal" && item.excerpt && (
                  <span className="text-sm text-[#737373] text-center max-w-[220px]">
                    {item.excerpt}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
