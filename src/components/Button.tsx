import { cn } from "../utils/cn";
import { buttonVariants } from "../utils/button.cva";
import { motion } from "framer-motion";
import React, { useState } from "react";
import type { VariantProps } from "class-variance-authority";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onDrag">,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

export const Button = ({
  className,
  variant = "stellar", // default to stellar for consistency
  size,
  children,
  ...props
}: ButtonProps) => {
  const [hovered, setHovered] = useState(false);

  const emojis = ["⚡", "💎"];

  return (
    <div
      data-theme={variant}
      className="relative inline-flex items-center justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Button itself now entirely theme-driven via button.cva */}
      <motion.button
        className={cn(buttonVariants({ variant, size, className }))}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        {...(props as any)}
      >
        {children}
      </motion.button>

      {/* Floating emojis — no color hardcoding */}
      {hovered && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {emojis.map((emoji, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 0, x: 0, scale: 0.8 }}
              animate={{
                opacity: [0, 1, 0],
                y: [-5 - Math.random() * 10, -40 - Math.random() * 20],
                x: (i - 2) * 20 + Math.random() * 10,
                scale: [1, 1.3, 0.8],
              }}
              transition={{
                duration: 0.8 + Math.random() * 0.4,
                ease: "easeOut",
              }}
              className="absolute text-lg select-none"
            >
              {emoji}
            </motion.span>
          ))}
        </div>
      )}
    </div>
  );
};
