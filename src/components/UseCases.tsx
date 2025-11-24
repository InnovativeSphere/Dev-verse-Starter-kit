"use client";

import React, { type FC } from "react";
import { cn } from "../utils/cn";
import { useCaseVariants } from "../utils/useCaseVariants .cva";
import { themes, type ThemeName } from "../Styles/themes";
import { FaRunning, FaLightbulb, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

interface UseCase {
  id: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface UseCasesProps {
  variant?: ThemeName;
  layout?: "grid" | "list";
  useCases?: UseCase[];
}

// Sample use cases
const defaultUseCases: UseCase[] = [
  {
    id: "u1",
    icon: <FaRunning size={32} />,
    title: "Enhanced Performance",
    desc: "Experience superior comfort and support for your workouts, making every move count.",
  },
  {
    id: "u2",
    icon: <FaLightbulb size={32} />,
    title: "Innovative Design",
    desc: "Cutting-edge sneaker designs that blend style with advanced ergonomics.",
  },
  {
    id: "u3",
    icon: <FaHeart size={32} />,
    title: "Everyday Comfort",
    desc: "Soft cushioning and breathable materials ensure comfort from dawn to dusk.",
  },
];

export const UseCases: FC<UseCasesProps> = ({
  variant = "helio",
  layout = "grid",
  useCases = defaultUseCases,
}) => {
  const theme = themes[variant];

  return (
    <section
      id="use-cases"
      className={cn(useCaseVariants({ variant, layout }))}
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.foreground,
        fontFamily: theme.fontFamily,
        position: "relative",
      }}
      aria-label="Product Use Cases and Benefits"
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

      <div className="max-w-6xl mx-auto py-16 relative z-10">
        <header className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-semibold"
            style={{ color: theme.colors.foreground }}
          >
            Why Choose Nike Sneakers
          </h2>
          <p
            className="text-sm md:text-base mt-2 opacity-80 max-w-xl mx-auto"
            style={{ color: theme.colors.muted }}
          >
            Discover the key benefits that make our sneakers stand out for performance,
            style, and comfort.
          </p>
        </header>

        <div
          className={cn(
            "gap-6",
            layout === "grid"
              ? "grid md:grid-cols-2 lg:grid-cols-3"
              : "flex flex-col gap-6"
          )}
        >
          {useCases.map((uc, idx) => (
            <motion.div
              key={uc.id}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 120, damping: 16 }}
              className={cn(
                useCaseVariants({ variant, card: "default" }),
                "relative overflow-hidden rounded-2xl transition-shadow duration-300 ease-out"
              )}
              style={{
                background: theme.colors.card,
                boxShadow: theme.shadows.lg,
                borderRadius: theme.radii.lg,
                padding: theme.spacing.lg,
              }}
            >
              {/* Accent glow behind icon */}
              <div
                aria-hidden
                className="absolute -top-6 -left-6 w-24 h-24 rounded-full"
                style={{
                  background: theme.colors.accent + "22",
                  filter: "blur(40px)",
                  zIndex: 0,
                }}
              />

              <div className="flex items-center gap-4 mb-3 relative z-10">
                <div
                  className="flex justify-center items-center w-12 h-12 rounded-full"
                  style={{
                    backgroundColor: theme.colors.accent + "33",
                    color: theme.colors.accent,
                  }}
                >
                  {uc.icon}
                </div>
                <h3
                  className="text-lg font-semibold"
                  style={{ color: theme.colors.foreground }}
                >
                  {uc.title}
                </h3>
              </div>
              <p
                className="text-sm opacity-80 relative z-10"
                style={{ color: theme.colors.foreground }}
              >
                {uc.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
