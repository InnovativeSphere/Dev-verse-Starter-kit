"use client";

import { type FC } from "react";
import { cn } from "../utils/cn";
import { ctaVariants } from "../utils/cta.cva";
import { themes, type ThemeName } from "../Styles/themes";
import { motion } from "framer-motion";
import { Button } from "../Shared-Components/Button";

interface CTAProps {
  variant?: ThemeName;
  buttonText?: string;
  buttonLink?: string;
  subtitle?: string;
}

export const CTA: FC<CTAProps> = ({
  variant = "helio",
  buttonText = "Buy Now",
  buttonLink = "#",
  subtitle = "Free shipping, 30-day returns, and premium comfort guaranteed.",
}) => {
  const theme = themes[variant];

  return (
    <section
      id="cta"
      className={cn(
        ctaVariants.container({ variant }),
        "relative overflow-hidden py-24 px-6 md:px-12"
      )}
      style={{
        backgroundColor: theme.colors.accent,
        color: theme.colors.foreground,
        fontFamily: theme.fontFamily,
      }}
      aria-label="Call to Action"
    >
      {/* Premium soft glow / radial gradient */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, ${theme.colors.foreground}15, transparent 35%),
            radial-gradient(circle at 80% 70%, ${theme.colors.foreground}10, transparent 25%),
            radial-gradient(circle at 50% 50%, ${theme.colors.foreground}08, transparent 50%)
          `,
          filter: "blur(120px)",
        }}
      />

      <motion.div
        className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2
          className={ctaVariants.title({ variant })}
          style={{
            textShadow: `0 4px 12px ${theme.colors.foreground}33`,
            fontSize: "2.5rem",
            lineHeight: 1.2,
          }}
        >
          Ready to elevate your sneaker game?
        </h2>

        <p
          className={ctaVariants.subtitle({ variant })}
          style={{
            maxWidth: "28rem",
            opacity: 0.85,
            fontSize: "1rem",
            lineHeight: 1.6,
            color: theme.colors.foreground,
          }}
        >
          {subtitle}
        </p>

        {buttonLink ? (
          <a
            href={buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-full md:w-auto"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 120, damping: 14 }}
            >
              <Button
                variant={variant}
                size="lg"
                className="px-12 py-4 text-lg"
                style={{
                  background: `linear-gradient(135deg, ${theme.colors.foreground}, ${theme.colors.foreground}cc)`,
                  color: theme.colors.accent,
                  border: `2px solid ${theme.colors.foreground}55`,
                }}
              >
                {buttonText}
              </Button>
            </motion.div>
          </a>
        ) : (
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
          >
            <Button
              variant={variant}
              size="lg"
              className="px-12 py-4 text-lg"
              style={{
                background: `linear-gradient(135deg, ${theme.colors.foreground}, ${theme.colors.foreground}cc)`,
                color: theme.colors.accent,
                border: `2px solid ${theme.colors.foreground}55`,
              }}
            >
              {buttonText}
            </Button>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};
