"use client";

import { type FC } from "react";
import { cn } from "../utils/cn";
import { footerVariants } from "../utils/footer.cva";
import { themes, type ThemeName } from "../Styles/themes";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";

interface FooterProps {
  variant?: ThemeName;
}

export const Footer: FC<FooterProps> = ({ variant = "helio" }) => {
  const theme = themes[variant];

  return (
    <footer
      className={cn(
        footerVariants.container({ variant }),
        "relative overflow-hidden py-12 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
      )}
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.foreground,
        fontFamily: theme.fontFamily,
      }}
    >
      {/* Soft radial glow / gradient layers */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, ${theme.colors.accent}22, transparent 40%),
            radial-gradient(circle at 80% 70%, ${theme.colors.accent}22, transparent 30%),
            radial-gradient(circle at 50% 50%, ${theme.colors.accent}15, transparent 50%)
          `,
          filter: "blur(80px)",
        }}
      />

      {/* Brand / Logo */}
      <motion.div
        className={footerVariants.brand({ variant })}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          fontSize: "1.5rem",
          fontWeight: 600,
          color: theme.colors.foreground,
        }}
      >
        Nike Premium
      </motion.div>

      {/* Copyright */}
      <motion.div
        className={footerVariants.copyright({ variant })}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{
          fontSize: "0.875rem",
          opacity: 0.7,
        }}
      >
        &copy; {new Date().getFullYear()} Nike. All rights reserved.
      </motion.div>

      {/* Social Links */}
      <motion.div
        className={footerVariants.socials({ variant })}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ display: "flex", gap: "1.5rem", fontSize: "1.25rem" }}
      >
        {[{
          icon: <FaTwitter />,
          label: "Twitter",
          href: "#",
        },{
          icon: <FaInstagram />,
          label: "Instagram",
          href: "#",
        },{
          icon: <FaFacebookF />,
          label: "Facebook",
          href: "#",
        }].map((social, i) => (
          <a
            key={i}
            href={social.href}
            aria-label={social.label}
            className="transition-transform duration-300 hover:scale-110"
            style={{ color: theme.colors.foreground }}
            onMouseEnter={(e) => (e.currentTarget.style.color = theme.colors.accent)}
            onMouseLeave={(e) => (e.currentTarget.style.color = theme.colors.foreground)}
          >
            {social.icon}
          </a>
        ))}
      </motion.div>
    </footer>
  );
};
