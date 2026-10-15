import ModelViewer from "@/components/ModelViewer";

/** Framed, interactive 3D bust of Rajdeep. Size it via `className`. */
const AboutPortrait = ({ className = "" }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <div
      aria-hidden="true"
      className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-strong)] opacity-20 blur-2xl scale-110 pointer-events-none"
    />
    <div
      className="relative h-full w-full rounded-3xl overflow-hidden"
      style={{
        background: "var(--accent-gradient-soft)",
        border: "2px solid var(--accent-muted)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      <ModelViewer
        src="/models/rajdeep-bust.glb"
        poster="/models/rajdeep-bust-poster.webp"
        posterWidth={790}
        posterHeight={950}
        alt="Interactive 3D portrait of Rajdeep Sah — drag to rotate"
        cameraOrbit="0deg 84deg 4.1m"
        minCameraOrbit="-70deg 65deg 4.1m"
        maxCameraOrbit="70deg 100deg 4.1m"
        cameraTarget="0m 0.2m 0m"
        fieldOfView="24deg"
        shadowIntensity="0"
        sway={35}
      />
    </div>
  </div>
);

export default AboutPortrait;
