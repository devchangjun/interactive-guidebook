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
    <div ref={ref} className="relative h-screen w-full max-w-full overflow-hidden">
      <motion.img
        src="/1.avif"
        alt="parallax"
        style={{
          y,
        }}
        className="absolute top-0 block h-[120vh] w-full object-cover"
      />
    </div>
  );
}
