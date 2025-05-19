import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function ParallaxImageTest() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const rawY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y = useSpring(rawY, {
    stiffness: 60,
    damping: 20,
    mass: 1,
    restDelta: 0.5,
  });
  return (
    <div
      ref={ref}
      style={{
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        width: "100%",
        maxWidth: "100vw",
      }}
    >
      <motion.img
        src="/1.avif"
        alt="parallax"
        style={{
          y,
          width: "100%",
          height: "120vh",
          objectFit: "cover",
          display: "block",
          position: "absolute",
          top: 0,
        }}
      />
    </div>
  );
}
