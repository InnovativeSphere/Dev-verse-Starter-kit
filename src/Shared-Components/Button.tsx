"use client";

import { type FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { themes, type ThemeName } from "../Styles/themes";

interface PremiumButtonProps {
  variant?: ThemeName;
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export const Button: FC<PremiumButtonProps> = ({
  variant = "helio",
  size = "md",
  children = "Click Me",
  onClick,
  className,
  style,
}) => {
  const theme = themes[variant];
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  const sizes = {
    sm: { width: 160, height: 44, fontSize: 14 },
    md: { width: 220, height: 56, fontSize: 16 },
    lg: { width: 280, height: 70, fontSize: 20 },
  };
  const { width, height, fontSize } = sizes[size];

  const handleClick = () => {
    // Start click animation
    setClicked(true);

    // Delay actual click action for animation
    setTimeout(() => {
      onClick?.();
      setClicked(false);
    }, 400); // 400ms for visual effect
  };

  return (
    <div className={`relative inline-block ${className || ""}`}>
      {/* Click ripple */}
      <AnimatePresence>
        {clicked && (
          <motion.div
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 2.2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute inset-0 rounded-full pointer-events-none z-0"
            style={{
              border: `2px solid ${theme.colors.accent}55`,
            }}
          />
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.button
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex items-center justify-center select-none overflow-hidden"
        style={{
          width,
          height,
          borderRadius: 10, // slightly sharper
          cursor: "pointer",
          background: hovered ? theme.colors.foreground : theme.colors.accent,
          color: hovered ? theme.colors.accent : theme.colors.foreground,
          fontWeight: 600,
          fontSize,
          fontFamily: "Poppins, Inter, sans-serif",
          outline: "none",
          border: "2px solid",
          borderColor: hovered ? theme.colors.accent : "transparent",
          transition: "all 0.3s ease",
          ...style,
        }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          initial={{ y: 0 }}
          animate={{ y: clicked ? 2 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          {children}
        </motion.span>

        {/* Optional subtle sliding gradient effect on hover */}
        {hovered && (
          <motion.div
            className="absolute inset-0 rounded-md pointer-events-none"
            style={{
              background: `linear-gradient(120deg, ${theme.colors.accent}22, ${theme.colors.accent}11)`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.button>
    </div>
  );
};
