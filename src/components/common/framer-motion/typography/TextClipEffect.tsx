"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextClipEffectItem, { TextClipEffectItemProps } from "./TextClipEffectItem";
import styles from "./TextClipEffect.module.css";

gsap.registerPlugin(ScrollTrigger);

export type TextClipEffectListProps = {
  items: TextClipEffectItemProps[];
  className?: string;
};

export default function TextClipEffect({ items, className }: TextClipEffectListProps) {
  return (
    <div className={styles.container}>
      {items.map((item, idx) => (
        <TextClipEffectItem key={idx} {...item} className={className} clipColor="#FFD600" />
      ))}
    </div>
  );
}
