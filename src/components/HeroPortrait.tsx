import Image from "next/image";

// No entrance animation: the photo is the page's LCP image and must paint
// immediately.
const HeroPortrait = () => (
  <div className="relative mx-auto w-full aspect-[4/5] max-w-[15rem] sm:max-w-[19rem] md:max-w-[22rem] lg:max-w-[26rem]">
    {/* Soft accent glow behind the portrait */}
    <div
      aria-hidden="true"
      className="absolute -inset-[8%] rounded-full blur-3xl opacity-60 pointer-events-none"
      style={{ background: "var(--accent-gradient-soft)" }}
    />

    {/* Offset outline frame for depth */}
    <div
      aria-hidden="true"
      className="absolute inset-0 translate-x-4 translate-y-4 sm:translate-x-5 sm:translate-y-5 rounded-[2rem] border-2 border-[var(--accent)] opacity-30 pointer-events-none"
    />

    {/* Gradient border around the photo */}
    <div
      className="relative h-full w-full rounded-[2rem] p-[3px] animate-float"
      style={{
        background: "var(--accent-gradient)",
        boxShadow: "var(--shadow-card-hover)",
      }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[calc(2rem-3px)] bg-surface">
        <Image
          src="/profile.jpg"
          alt="Portrait of Rajdeep Sah smiling, wearing a dark sweater against a blue backdrop"
          fill
          priority
          sizes="(min-width: 1024px) 26rem, (min-width: 768px) 22rem, (min-width: 640px) 19rem, 15rem"
          className="object-cover object-[50%_30%]"
        />
        {/* Subtle accent tint at the bottom to tie the photo to the palette */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[color-mix(in_srgb,var(--accent)_25%,transparent)] to-transparent pointer-events-none"
        />
      </div>
    </div>
  </div>
);

export default HeroPortrait;
