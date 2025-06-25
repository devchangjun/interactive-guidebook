import { motion } from "framer-motion";
import { useParallax } from "../effects/TiltCard";

interface ParallaxImageProps {
  src?: string;
  alt?: string;
  layoutId?: string;
  height?: number;
}

export function ParallaxImage({ src, alt, layoutId, height = 140 }: ParallaxImageProps) {
  const { x, y } = useParallax(2.5);
  return (
    <motion.img src={src} alt={alt} layoutId={layoutId} style={{ x, y, height }} className="w-full object-cover" />
  );
}
