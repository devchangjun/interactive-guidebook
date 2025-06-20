import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function ParallaxImageTest() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rawY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y = useSpring(rawY, {
    stiffness: 60,
    damping: 20,
    mass: 1,
    restDelta: 0.5,
  });
  return (
    <div ref={ref} className="relative h-96 w-full max-w-full overflow-hidden rounded-lg">
      <motion.img
        src="/1.avif"
        alt="parallax"
        style={{
          y,
        }}
        className="absolute top-0 block h-[140%] w-full object-cover"
      />
      <div className="relative z-10 flex h-full items-center justify-center">
        <h2 className="mix-blend-difference text-4xl font-bold text-white">Parallax Demo</h2>
      </div>
    </div>
  );
}
