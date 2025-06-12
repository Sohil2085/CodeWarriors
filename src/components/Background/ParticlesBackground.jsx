import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: { value: "#0d0d0d" } },
        particles: {
          number: { value: 80 },
          color: { value: "#00fff7" },
          shape: { type: "circle" },
          opacity: { value: 0.2 },
          size: { value: 2 },
          move: {
            enable: true,
            speed: 0.8,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out"
          },
          links: {
            enable: true,
            distance: 100,
            color: "#00fff7",
            opacity: 0.3,
            width: 1,
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
