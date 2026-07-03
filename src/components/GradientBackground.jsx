import { useEffect, useRef } from "react";
import { NeatGradient } from "@firecms/neat";

const config = {
  colors: [
    { color: "#1C397D", enabled: true },
    { color: "#122654", enabled: true },
    { color: "#09132A", enabled: true },
    { color: "#060D1D", enabled: true },
  ],
  speed: 2.5,
  horizontalPressure: 3,
  verticalPressure: 4,
  waveFrequencyX: 2,
  waveFrequencyY: 3,
  waveAmplitude: 5,
  shadows: 1,
  highlights: 5,
  colorBrightness: 1,
  colorSaturation: 7,
  wireframe: false,
  colorBlending: 8,
  backgroundColor: "#003FFF",
  backgroundAlpha: 1,
  grainScale: 0,
  grainSparsity: 0,
  grainIntensity: 0,
  grainSpeed: 1,
  resolution: 1,
  yOffset: 0,
  yOffsetWaveMultiplier: 4,
  yOffsetColorMultiplier: 4,
  yOffsetFlowMultiplier: 4,
  flowDistortionA: 3.7,
  flowDistortionB: 0.8,
  flowScale: 1.6,
  flowEase: 0.32,
  flowEnabled: true,
  enableProceduralTexture: false,
  transparentTextureVoid: false,
  textureVoidLikelihood: 0.29,
  textureVoidWidthMin: 120,
  textureVoidWidthMax: 420,
  textureBandDensity: 2.9,
  textureColorBlending: 0.06,
  textureSeed: 536,
  textureEase: 0.5,
  proceduralBackgroundColor: "#775454",
  textureShapeTriangles: 20,
  textureShapeCircles: 15,
  textureShapeBars: 15,
  textureShapeSquiggles: 10,
  domainWarpEnabled: false,
  domainWarpIntensity: 0,
  domainWarpScale: 3,
  vignetteIntensity: 0,
  vignetteRadius: 0.8,
  fresnelEnabled: false,
  fresnelPower: 2,
  fresnelIntensity: 0.5,
  fresnelColor: "#FFFFFF",
  iridescenceEnabled: false,
  iridescenceIntensity: 0.5,
  iridescenceSpeed: 1,
  bloomIntensity: 0,
  bloomThreshold: 0.7,
  chromaticAberration: 0,
  shapeType: "plane",
  shapeRotationX: 0,
  shapeRotationY: 0,
  shapeRotationZ: 0,
  shapeAutoRotateSpeedX: 0,
  shapeAutoRotateSpeedY: 0,
  sphereRadius: 15,
  torusRadius: 15,
  torusTube: 5,
  cylinderRadius: 10,
  cylinderHeight: 40,
  planeBend: 0,
  planeTwist: 0,
  silhouetteFade: 0.25,
  cylinderFade: 0.08,
  ribbonFade: 0.05,
  flatShading: true,
  cameraLock: false,
  cameraX: 0,
  cameraY: 0,
  cameraZ: 0,
  cameraRotationX: 0,
  cameraRotationY: 0,
  cameraRotationZ: 0,
  cameraZoom: 1.8,
};

export default function GradientBackground() {
  const canvasRef = useRef(null);
  const gradientRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Initialize gradient
    gradientRef.current = new NeatGradient({
      ref: canvasRef.current,
      ...config,
    });

    // React to scroll
    const handleScroll = () => {
      if (gradientRef.current) {
        gradientRef.current.yOffset = window.scrollY * 0.5;
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="gradient"
      className="fixed inset-0 w-full h-full -z-10"
      style={{ filter: "drop-shadow(0 0 0 transparent)" }}
    />
  );
}
