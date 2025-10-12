import React from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";
import { cardVariants } from "../utils/card.cva";
import { Button } from "./Button";
import type { IconType } from "react-icons";
import { FaRegStar } from "react-icons/fa6";
import { themes } from "../Styles/themes";

interface CardProps {
  title: string;
  description: string;
  variant?: "stellar" | "bloom" | "minimalist";
  size?: "sm" | "md" | "lg";
  buttonText?: string;
  icon?: IconType;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  variant = "stellar",
  size = "sm",
  buttonText = "Learn More",
  icon: Icon = FaRegStar,
}) => {
  const theme = themes[variant];
  const accentColor = theme.colors.accent;

  const blobs = Array.from({ length: 3 });

  return (
    <motion.div
      className={cn(cardVariants({ variant, size }))}
      whileHover={{ scale: 1.03, rotateX: 1.5, rotateY: -1.5 }}
      transition={{ type: "spring", stiffness: 160, damping: 16 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      style={{
        color: theme.colors.foreground,
        backgroundColor: theme.colors.background,
      }}
    >
      {/* Soft accent blobs */}
      {blobs.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-30 blur-3xl pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${theme.colors.accent}33, transparent 70%)`,
            width: `${Math.random() * 80 + 40}px`,
            height: `${Math.random() * 80 + 40}px`,
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 90}%`,
          }}
          animate={{
            x: [0, 6 - i * 2, -6 + i * 2, 0],
            y: [0, -4 + i, 4 - i, 0],
            scale: [1, 1.03, 0.97, 1],
          }}
          transition={{
            duration: 14 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Card content */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div
              className="p-2 rounded-full backdrop-blur-md"
              style={{ backgroundColor: `${accentColor}33` }}
            >
              <Icon
                className="text-xl sm:text-2xl opacity-90"
                style={{ color: accentColor }}
              />
            </div>
            <h3
              className="text-lg sm:text-xl font-semibold tracking-tight"
              style={{ color: theme.colors.foreground }}
            >
              {title}
            </h3>
          </div>

          <p
            className="text-sm opacity-80 leading-relaxed"
            style={{ color: theme.colors.foreground }}
          >
            {description}
          </p>
        </div>

        <div className="mt-4">
          <Button variant={variant} size="sm">
            {buttonText}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
