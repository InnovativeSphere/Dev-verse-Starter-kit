// src/utils/animation.cva.ts
import type { Variants, TargetAndTransition } from "framer-motion";

// Smooth easing curve for all variants
export const smoothEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

// ✅ Fade up animation
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: smoothEase },
  },
};

// ✅ Fade in (no Y translation)
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: smoothEase },
  },
};

// ✅ Stagger children animation
export const staggerChildren = (stagger = 0.15): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger },
  },
});

// ✅ Hover scale effect
export const hoverScale: TargetAndTransition = {
  scale: 1.05,
  transition: { type: "spring", stiffness: 220, damping: 20 },
};

// ✅ Button tap effect
export const tapScale: TargetAndTransition = {
  scale: 0.92,
  transition: { type: "spring", stiffness: 300, damping: 25 },
};

// ✅ Export all variants in a single object
export const animationVariants = {
  fadeUp,
  fadeIn,
  staggerChildren,
  hoverScale,
  tapScale,
};
