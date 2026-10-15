"use client";

import { motion } from "framer-motion";
import ModelViewer from "@/components/ModelViewer";

const HeroModel = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.92 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    className="relative mx-auto w-full aspect-square max-w-[17rem] sm:max-w-[22rem] md:max-w-[26rem] lg:max-w-[34rem]"
  >
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
      alt="3D sculpture of a DNA helix wrapped around gears, equations, a molecule and a key, resting on a book — symbolizing curiosity in AI and mathematics"
      cameraOrbit="90deg 80deg 112%"
      minCameraOrbit="auto 55deg 112%"
      maxCameraOrbit="auto 100deg 112%"
    />
  </motion.div>
);

export default HeroModel;
