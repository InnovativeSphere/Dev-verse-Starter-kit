"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "../utils/cn";
import { aboutVariants } from "../utils/about.cva";
import { Card } from "../components/Card";
import { FaRegStar, FaPalette, FaCode } from "react-icons/fa6";
import { Button } from "../components/Button";
import { themes } from "../Styles/themes";

export interface AboutProps {
  variant?: "stellar" | "bloom" | "minimalist";
}

export const About = ({ variant = "stellar" }: AboutProps) => {
  const images =
    variant === "stellar"
      ? [
          "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
        ]
      : variant === "bloom"
      ? [
          "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1603988363607-e1e4a66962c0?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1620912189861-fc1a2f0cf39c?auto=format&fit=crop&w=1200&q=80",
        ]
      : [
          "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1612831662375-295c1003d3d3?auto=format&fit=crop&w=1200&q=80",
        ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const theme = themes[variant];
  const accent = theme.colors.accent;
  const background = theme.colors.background;
  const foreground = theme.colors.foreground;
  const subtle = theme.colors.subtle;

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        "relative overflow-hidden min-h-screen flex flex-col items-center justify-center py-20",
        aboutVariants({ variant })
      )}
      style={{ backgroundColor: background, color: foreground }}
    >
      {/* Floating Abstract Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-40 blur-3xl"
            animate={{
              x: [0, 20, -20, 0],
              y: [0, -15, 15, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 18 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              background: `radial-gradient(circle, ${accent}33, transparent 70%)`,
              width: `${250 + i * 150}px`,
              height: `${250 + i * 150}px`,
              top: `${10 + i * 15}%`,
              left: `${-10 + i * 20}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto px-6">
        {/* Slideshow */}
        <motion.div
          className="flex-1 relative rounded-2xl overflow-hidden shadow-xl backdrop-blur-lg border"
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
          style={{
            borderColor: subtle,
            backgroundColor: `${background}E6`,
          }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={images[index]}
              src={images[index]}
              alt="Showcase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="object-cover w-full h-[420px] md:h-[520px]"
            />
          </AnimatePresence>

          {/* Subtle shimmer overlay */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, transparent, ${accent}1A, transparent)`,
            }}
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="flex-1 space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold leading-tight relative inline-block"
            whileHover={{ y: -3 }}
          >
            {variant === "stellar" && "Driven by Vision, Crafted in Code 🚀"}
            {variant === "bloom" && "Designed with Heart, Built to Inspire 🌷"}
            {variant === "minimalist" && "Simple. Honest. Beautiful. 🖤"}
            <motion.span
              layoutId={`underline-${variant}`}
              className="block mt-2 h-[3px] rounded-full"
              style={{ background: accent }}
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </motion.h2>

          <p
            className="text-lg leading-relaxed"
            style={{ color: `${foreground}CC` }}
          >
            We create design systems that harmonize creativity, performance, and elegance.
            Our mission is to craft reusable, beautiful, and responsive components that
            empower creators and developers alike.
          </p>

          <p style={{ color: `${foreground}99` }}>
            Every detail you see is deliberate — from smooth parallax motions to color
            dynamics that reflect your brand’s identity. This kit is a foundation for
            limitless expression.
          </p>

          <Button variant={variant}>
            <span className="inline-block px-6 py-3 font-semibold">Learn More</span>
          </Button>
        </motion.div>
      </div>

      {/* Cards below About section */}
      <motion.div
        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Card
          title="Modern Web Design"
          description="Craft responsive, pixel-perfect layouts that delight users and provide seamless experiences."
          buttonText="Learn More"
          size="sm"
          variant={variant}
          icon={FaPalette}
        />
        <Card
          title="Seamless UX"
          description="Design intuitive interfaces that simplify workflows and increase user satisfaction."
          buttonText="Discover"
          size="sm"
          variant={variant}
          icon={FaRegStar}
        />
        <Card
          title="Efficient Code"
          description="Build clean, reusable, and scalable code that speeds up development and maintains quality."
          buttonText="Explore"
          size="sm"
          variant={variant}
          icon={FaCode}
        />
      </motion.div>
    </motion.section>
  );
};
