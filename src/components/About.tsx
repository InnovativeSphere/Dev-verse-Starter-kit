"use client";

import React, { type FC, useEffect, useState, useRef } from "react";
import { cn } from "../utils/cn";
import { aboutVariants } from "../utils/about.cva";
import { themes, type ThemeName } from "../Styles/themes";
import { motion, AnimatePresence } from "framer-motion";

interface StorySlide {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
}

interface AboutProps {
  variant?: ThemeName;
  slides?: StorySlide[];
  interval?: number; // in ms
}

const defaultSlides: StorySlide[] = [
  {
    id: "a1",
    title: "Our Story",
    content:
      "Nike has always been about pushing boundaries and empowering every athlete. From humble beginnings to global innovation, we craft sneakers that blend style, performance, and purpose.",
    imageUrl:
      "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: "a2",
    title: "Innovation in Motion",
    content:
      "Every sneaker we create is designed with innovation at the forefront. Materials, ergonomics, and aesthetics combine to elevate performance and style.",
    imageUrl:
      "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: "a3",
    title: "Comfort Meets Style",
    content:
      "From street to sports, Nike sneakers provide unparalleled comfort without compromising style. Designed for daily wear and high performance alike.",
    imageUrl:
      "https://images.unsplash.com/photo-1607792246511-0b5f445700b4?w=600&auto=format&fit=crop&q=60",
  },
];

export const About: FC<AboutProps> = ({
  variant = "helio",
  slides = defaultSlides,
  interval = 5000,
}) => {
  const theme = themes[variant];
  const [index, setIndex] = useState(0);
  const autoRef = useRef<number | null>(null);
  const length = slides.length;

  useEffect(() => {
    startAuto();
    return stopAuto;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startAuto = () => {
    stopAuto();
    autoRef.current = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % length);
    }, interval);
  };

  const stopAuto = () => {
    if (autoRef.current) {
      window.clearInterval(autoRef.current);
      autoRef.current = null;
    }
  };

  const currentSlide = slides[index];

  return (
    <section
      id="about"
      className={cn(aboutVariants({ variant }), "py-16 px-4 md:px-8 relative")}
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.foreground,
        fontFamily: theme.fontFamily,
      }}
      aria-label="About / Product Story"
    >
      {/* Soft radial background blobs */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background: `radial-gradient(circle at 25% 25%, ${theme.colors.accent}11, transparent 30%),
                       radial-gradient(circle at 75% 70%, ${theme.colors.accent}11, transparent 25%)`,
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Column */}
        <div className="flex-1 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <h2
                className="text-3xl md:text-4xl font-semibold mb-4"
                style={{ color: theme.colors.foreground }}
              >
                {currentSlide.title}
              </h2>
              <p
                className="text-sm md:text-base opacity-80"
                style={{ color: theme.colors.foreground }}
              >
                {currentSlide.content}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Image Column */}
        <div
          className="flex-1 relative w-full h-[300px] md:h-[360px] rounded-2xl overflow-hidden shadow-xl"
          onMouseEnter={stopAuto}
          onMouseLeave={startAuto}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide.id}
              src={currentSlide.imageUrl}
              alt={currentSlide.title}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute w-full h-full object-cover rounded-2xl"
              style={{ boxShadow: theme.shadows.lg }}
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
