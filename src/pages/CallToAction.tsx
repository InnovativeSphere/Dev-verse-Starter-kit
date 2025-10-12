"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { ctaContainer, ctaTitle, ctaSubtitle } from "../utils/cta.cva";
import { Button } from "../components/Button";
import { themes } from "../Styles/themes";

interface CallToActionProps {
  variant?: "stellar" | "bloom" | "minimalist";
}

export const CallToAction: React.FC<CallToActionProps> = ({
  variant = "stellar",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const parallaxYReverse = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const theme = themes[variant];
  const accent = theme.colors.accent;
  const accentSecondary = theme.colors.accentSecondary || accent;
  const background = theme.colors.background;
  const foreground = theme.colors.foreground;
  const glass = theme.colors.glass || `${background}80`;

  return (
    <section
      ref={ref}
      className={ctaContainer({ variant })}
      style={{ backgroundColor: background, color: foreground }}
    >
      {/* Parallax Orbs */}
      <motion.div
        style={{
          y: parallaxY,
          background: `radial-gradient(circle at top left, ${accent}66, transparent 70%)`,
        }}
        className="absolute top-[-10%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[130px] opacity-25"
      />
      <motion.div
        style={{
          y: parallaxYReverse,
          background: `radial-gradient(circle at bottom right, ${accentSecondary}66, transparent 70%)`,
        }}
        className="absolute bottom-[-20%] right-[10%] w-[450px] h-[450px] rounded-full blur-[120px] opacity-20"
      />

      {/* Subtle Glass Layer */}
      <div
        className="absolute inset-0 backdrop-blur-[40px] pointer-events-none"
        style={{ backgroundColor: `${glass}0D` }}
      />

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.42, 0, 0.58, 1] }}
      >
        <motion.h2 className={ctaTitle({ variant })} whileHover={{ scale: 1.02 }}>
          The Future Is{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(to right, ${accent}, ${accentSecondary})`,
            }}
          >
            In Motion
          </span>
        </motion.h2>

        <p
          className={ctaSubtitle({ variant })}
          style={{ color: `${foreground}CC` }}
        >
          Step into a new era of innovation — where sustainability meets performance.
          Each design we craft adapts to your style and purpose.
        </p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button variant={variant}>Begin Your Journey</Button>
        </motion.div>
      </motion.div>

      {/* Floating Decorative Orbs */}
      <motion.div
        style={{ y: parallaxY }}
        className="absolute top-1/2 left-12 hidden md:block"
      >
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          style={{
            background: `radial-gradient(circle at center, ${accent}66, transparent 70%)`,
          }}
          className="w-24 h-24 rounded-full blur-[40px] opacity-40"
        />
      </motion.div>

      <motion.div
        style={{ y: parallaxYReverse }}
        className="absolute bottom-1/3 right-12 hidden md:block"
      >
        <motion.div
          animate={{
            rotate: [0, -360],
            scale: [1, 1.05, 1],
          }}
          transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
          style={{
            background: `radial-gradient(circle at center, ${accentSecondary}66, transparent 70%)`,
          }}
          className="w-28 h-28 rounded-full blur-[50px] opacity-30"
        />
      </motion.div>
    </section>
  );
};
