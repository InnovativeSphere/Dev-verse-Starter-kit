"use client";

import React from "react";
import { cn } from "../utils/cn";
import { footerVariants } from "../utils/footer.cva";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

interface FooterProps {
  variant?: "stellar" | "bloom" | "minimalist";
}

export const Footer: React.FC<FooterProps> = ({ variant = "stellar" }) => {
  const links = ["Home", "About", "Kits", "Contact"];
  const socials = [
    { icon: <FaGithub />, href: "https://github.com/" },
    { icon: <FaTwitter />, href: "https://twitter.com/" },
    { icon: <FaLinkedin />, href: "https://linkedin.com/" },
    { icon: <FaInstagram />, href: "https://instagram.com/" },
  ];

  const accentColor =
    variant === "stellar"
      ? "var(--stellar-accent)"
      : variant === "bloom"
      ? "var(--bloom-accent)"
      : "var(--minimalist-accent)";

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <footer className={cn(footerVariants({ variant }))}>
      {/* Subtle Floating Accent Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-30 blur-3xl"
            style={{
              background: `radial-gradient(circle, ${accentColor}, transparent 70%)`,
              width: `${Math.random() * 120 + 100}px`,
              height: `${Math.random() * 120 + 100}px`,
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 80}%`,
            }}
            animate={{
              x: [0, 10, -10, 0],
              y: [0, -8, 8, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Footer Layout */}
      <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center gap-5 z-10 text-sm sm:text-base">
        {/* Branding */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-2xl text-gray-500 sm:text-3xl font-semibold tracking-tight bg-clip-text  bg-gradient-to-r from-white to-[color:var(--theme-ring)] drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
            dev &lt;verse/&gt;
          </span>
          <span className="text-xs text-gray-500 opacity-80">
            Modern UI Kit for effortless theming
          </span>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm"
        >
          {links.map((link) => (
            <Link
              key={link}
              to={`/${link.toLowerCase()}`}
              className="relative group transition-all text-gray-300 hover:text-white"
            >
              {link}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full" />
            </Link>
          ))}
        </motion.div>

        {/* Subscription Form */}
        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-2 justify-center mt-2"
        >
          <input
            type="email"
            placeholder="Your email"
            className={cn(
              "px-3 py-2 rounded-md border text-xs sm:text-sm text-gray-500 placeholder:text-gray-400 bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 transition-all",
              variant === "stellar"
                ? "border-[var(--stellar-accent)] focus:ring-[var(--stellar-accent)]"
                : variant === "bloom"
                ? "border-[var(--bloom-accent)] focus:ring-[var(--bloom-accent)]"
                : "border-[var(--minimalist-accent)] focus:ring-[var(--minimalist-accent)]"
            )}
          />
          <Button variant={variant} size="sm">
            Subscribe
          </Button>
        </motion.form>

        {/* Social Icons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center gap-4 sm:gap-6 text-lg text-gray-300 mt-2"
        >
          {socials.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 2 }}
              whileTap={{ scale: 0.9 }}
              className="transition-colors hover:text-gray-900"
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-xs text-gray-400 opacity-70 mt-4"
        >
          &copy; {new Date().getFullYear()} dev &lt;verse/&gt;. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};
