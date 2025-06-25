import { motion } from "framer-motion";
import { useParallax } from "../effects/TiltCard";
import { ReactNode } from "react";

interface ParallaxTitleProps {
  children: ReactNode;
  layoutId?: string;
}

export function ParallaxTitle({ children, layoutId }: ParallaxTitleProps) {
  const { x, y } = useParallax(1.2);
  return (
    <motion.h3 layoutId={layoutId} style={{ x, y }} className="mx-6 mb-2 my-4 text-2xl font-bold">
      {children}
    </motion.h3>
  );
}
