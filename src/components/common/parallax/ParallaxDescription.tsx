import { motion } from "framer-motion";
import { useParallax } from "../effects/TiltCard";
import { ReactNode } from "react";

interface ParallaxDescriptionProps {
  children: ReactNode;
}

export function ParallaxDescription({ children }: ParallaxDescriptionProps) {
  const { x, y } = useParallax(0.7);
  return (
    <motion.p style={{ x, y }} className="mx-6 text-gray-600">
      {children}
    </motion.p>
  );
}
