"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "../utils/cn";
import { servicesVariants } from "../utils/services.cva";
import { FaLaptopCode, FaCode, FaRocket } from "react-icons/fa6";
import { themes } from "../Styles/themes";

interface ServicesProps {
  variant?: "stellar" | "bloom" | "minimalist";
}

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ElementType;
  images: string[];
}

export const Services = ({ variant = "stellar" }: ServicesProps) => {
  const theme = themes[variant];
  const accent = theme.colors.accent;

  const services: ServiceItem[] = [
    {
      title: "Web Development",
      description:
        "Building responsive, scalable websites with clean code and seamless performance.",
      icon: FaLaptopCode,
      images: [
        "https://images.unsplash.com/photo-1584697964403-b7bc690c67d6?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1523475496153-3fdfac5c93f5?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
      ],
    },
    {
      title: "UI / UX Design",
      description:
        "Crafting intuitive interfaces and delightful user experiences across all devices.",
      icon: FaCode,
      images: [
        "https://images.unsplash.com/photo-1590608897129-79c5a6800b52?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1614644147724-5e859a1ad4b0?auto=format&fit=crop&w=1200&q=80",
      ],
    },
    {
      title: "Performance Optimization",
      description:
        "Delivering fast, efficient, and optimized digital experiences through performance tuning.",
      icon: FaRocket,
      images: [
        "https://images.unsplash.com/photo-1555066931-e57f86aa08a3?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
      ],
    },
  ];

  const [index, setIndex] = useState(0);
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % services[currentService].images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentService, services]);

  const blobs = [
    { size: 200, top: "10%", left: "15%", color: accent },
    { size: 160, top: "65%", left: "60%", color: accent },
    { size: 120, top: "30%", left: "75%", color: accent },
  ];

  return (
    <motion.section
      className={cn(
        "relative overflow-hidden min-h-screen flex flex-col items-center justify-center py-24 px-6",
        servicesVariants({ variant })
      )}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        {blobs.map((b, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-20"
            style={{
              width: b.size,
              height: b.size,
              top: b.top,
              left: b.left,
              background: b.color,
            }}
            animate={{
              y: [0, 20, 0],
              x: [0, -15, 0],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12 text-center relative z-10"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Our Core Services
        <motion.span
          layoutId={`underline-${variant}-services`}
          className="block mt-3 h-[3px] w-32 mx-auto rounded-full"
          style={{ background: accent }}
          initial={{ width: 0 }}
          whileInView={{ width: "8rem" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </motion.h2>

      {/* Services Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full">
        {services.map((service, idx) => {
          const Icon = service.icon;
          const active = currentService === idx;

          return (
            <motion.div
              key={idx}
              className={cn(
                "relative p-8 rounded-2xl shadow-xl border backdrop-blur-lg cursor-pointer transition-all duration-500 hover:scale-[1.03]",
                active
                  ? "border-opacity-60"
                  : "border-opacity-20 opacity-80 hover:opacity-100"
              )}
              style={{
                borderColor: accent,
                background:
                  variant === "minimalist"
                    ? theme.colors.secondary
                    : `${theme.colors.secondary}DD`,
              }}
              onClick={() => setCurrentService(idx)}
              whileHover={{
                y: -6,
                boxShadow: `0 8px 25px ${accent}33`,
              }}
            >
              <motion.div
                className="flex flex-col items-center text-center space-y-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Icon
                  size={36}
                  style={{
                    color: accent,
                    filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.15))",
                  }}
                />
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="opacity-75 text-sm">{service.description}</p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Image slideshow */}
      <div className="relative z-10 mt-16 w-full max-w-5xl h-[420px] overflow-hidden rounded-2xl shadow-2xl border border-white/10">
        <AnimatePresence mode="wait">
          <motion.img
            key={services[currentService].images[index]}
            src={services[currentService].images[index]}
            alt={services[currentService].title}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            onError={(e) =>
              ((e.target as HTMLImageElement).src =
                "https://images.unsplash.com/photo-1556767576-cfba5f8e7d16?auto=format&fit=crop&w=1200&q=80")
            }
          />
        </AnimatePresence>

        {/* Overlay shimmer */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />

        {/* Caption */}
        <motion.div
          className="absolute bottom-6 left-8 text-white/90 text-lg font-medium backdrop-blur-md px-4 py-2 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ background: "rgba(0,0,0,0.3)" }}
        >
          {services[currentService].title}
        </motion.div>
      </div>
    </motion.section>
  );
};
