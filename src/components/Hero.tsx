"use client";

import { type FC } from "react";
import { cn } from "../utils/cn";
import { heroVariants } from "../utils/hero.cva";
import { themes, type ThemeName } from "../Styles/themes";
import { Button } from "../Shared-Components/Button";
import { GalleryHeader } from "../Shared-Components/Heading";
import { motion } from "framer-motion";

interface HeroProps {
  variant?: ThemeName;
}

export const Hero: FC<HeroProps> = ({ variant = "helio" }) => {
  const theme = themes[variant];

  // Particle/float effect for subtle background movement
  const particles = Array.from({ length: 8 });

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className={cn(
        heroVariants({ variant }),
        "mt-14 py-24 md:py-28 overflow-visible relative"
      )}
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.foreground,
        fontFamily: theme.fontFamily,
      }}
    >
      {/* Layered radial glows */}
      <div
        className="absolute inset-0 -z-20 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, ${theme.colors.accent}1a, transparent 40%),
            radial-gradient(circle at 80% 60%, ${theme.colors.accent}10, transparent 50%)
          `,
          filter: "blur(120px)",
        }}
      />

      {/* Subtle floating particles */}
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-white/20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            pointerEvents: "none",
          }}
          animate={{ y: ["0%", "10%", "0%"], opacity: [0.3, 0.6, 0.3] }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Title */}
        <motion.h1
          data-testid="hero-title"
          className="text-4xl md:text-6xl font-semibold mb-4 max-w-2xl"
          style={{ color: theme.colors.foreground }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Build the{" "}
          <span
            style={{
              color: theme.colors.accent,
              textShadow: "0 0 12px rgba(255,255,255,0.15)",
            }}
          >
            Future of Design
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          data-testid="hero-subtitle"
          className="text-lg md:text-xl mb-10 max-w-xl opacity-80 leading-relaxed"
          style={{ color: theme.colors.foreground }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut", delay: 0.1 }}
        >
          A refined library of components designed with balance, clarity, and
          precision — giving your next UI a premium edge.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
          <Button
            variant={variant}
            size="lg"
            className="px-12 py-4 text-lg mb-14 transition-transform hover:scale-[1.04]  hover:shadow-accent/40"
            onClick={() => (window.location.href = "https://paystack.com")}
          >
            Explore Now
          </Button>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.25 }}
        >
          <motion.div
            className="w-[74%] md:w-[54%] lg:w-[44%] relative"
            style={{ perspective: 1200 }}
            whileHover={
              window.innerWidth > 768
                ? { scale: 1.03, rotateX: 4, rotateY: -4 }
                : {}
            }
            transition={{ type: "spring", stiffness: 120, damping: 16 }}
          >
            <img
              data-testid="hero-image"
              src="https://images.unsplash.com/photo-1588361861040-ac9b1018f6d5?w=600&auto=format&fit=crop&q=60"
              alt="Hero Image"
              className="w-full rounded-2xl object-cover shadow-2xl transition-transform duration-300 ease-out"
              style={{ height: "380px" }}
            />
            {/* Subtle reflection/shine overlay */}
            <div className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-tr from-white/10 to-transparent" />
          </motion.div>
        </motion.div>

        {/* Section Header under hero */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="mt-16"
        >
          <GalleryHeader
            title="My Visual Diary"
            subtitle="See the world through quiet, composed visuals — swipe or use controls to explore."
            variantText="quiet, composed visuals"
            variant={"mono"}
          />
        </motion.div>
      </div>
    </section>
  );
};
