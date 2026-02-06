import Image from "next/image";
import clsx from "clsx";

export default function CategoryIntroBlock({ data }: { data: any }) {
  const bgClass = clsx({
    "bg-[#F4F0ED]": data.background === "default",
    "bg-[#DFDAD7]": data.background === "muted",
    "bg-black text-white": data.background === "dark",
  });

  return (
    <section
      className={clsx(
        bgClass,
        "px-4 sm:px-8 md:px-20 py-12 font-galaxie md:py-24"
      )}
    >
      <div className="mx-auto max-w-7xl text-black grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="max-w-[509px] mx-auto">
          <h2 
          style={{
              WebkitTextStroke: '0.3px currentColor',
              textShadow: '0 0 0.7px currentColor',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
            }}

          className="font-galaxie  mb-5 text-center className tracking-[0.01em] text-[26px] sm:text-[30px] md:text-[34px]">
            {data.titleOverride || data.category.title}
          </h2>

          {data.descriptionOverride && (
            <p 
            style={{
              WebkitTextStroke: '0.1px currentColor',
              textShadow: '0 0 0.7px currentColor',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
            }}
            className="mb-8 tracking-[0.01em] font-galaxie">
              {data.descriptionOverride}
            </p>
          )}

          {/* CTAs */}
          <div className="flex flex-col items-center gap-4">
            {data.primaryCta?.label && (
              <a
              style={{
              WebkitTextStroke: '0.1px currentColor',
              textShadow: '0 0 0.7px currentColor',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
            }}
                href={data.primaryCta.href}
                className="border border-[#737373]
    w-[233px] h-[33px] cursor-pointer text-center
    font-galaxie text-[16px] text-[#737373] pt-1
    transition-all hover:scale-103 hover:translate-y-1.2 duration-300 ease-in-out
    hover:text-black
    hover:border-black"
              >
                {data.primaryCta.label}
              </a>
            )}

            {data.secondaryCta?.label && (
              <a
              style={{
              WebkitTextStroke: '0.1px currentColor',
              textShadow: '0 0 0.7px currentColor',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
            }}
                href={data.primaryCta.href}
                className="border border-[#737373]
      cursor-pointer text-center px-4 py-1
    font-galaxie text-[16px] text-[#737373] pt-1
    transition-all hover:scale-103 hover:translate-y-1.2 duration-300 ease-in-out
    hover:text-black
    hover:border-black"
              >
                {data.secondaryCta.label}
              </a>
            )}
          </div>
        </div>

        {data.imageUrl && (
          <div className="flex justify-center">
            <Image
              src={data.imageUrl}
              alt={data.titleOverride || data.category.title}
              width={583}
              height={734}
            />
          </div>
        )}
      </div>
    </section>
  );
}
