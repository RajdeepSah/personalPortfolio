import ModelViewer from "@/components/ModelViewer";

// No entrance animation: the poster is the page's LCP image and must paint
// immediately.
const HeroModel = () => (
  <div className="relative mx-auto w-full aspect-square max-w-[16rem] sm:max-w-[22rem] md:max-w-[26rem] lg:max-w-[34rem]">
    {/* Soft accent glow behind the model */}
    <div
      aria-hidden="true"
      className="absolute inset-[12%] rounded-full blur-3xl opacity-60"
      style={{ background: "var(--accent-gradient-soft)" }}
    />

    <ModelViewer
      src="/models/hero-sculpture.glb"
      poster="/models/hero-sculpture-poster.webp"
      posterWidth={900}
      posterHeight={900}
      priority
      alt="3D sculpture of a DNA helix wrapped around gears, equations, a molecule and a key, resting on a book, symbolizing curiosity in AI and mathematics"
      cameraOrbit="90deg 80deg 112%"
      minCameraOrbit="auto 55deg 112%"
      maxCameraOrbit="auto 100deg 112%"
    />
  </div>
);

export default HeroModel;
