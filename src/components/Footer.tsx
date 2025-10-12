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

  // 🌟 Smooth fadeUp animation (shared)
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <footer className={cn(footerVariants({ variant }))}>
      {/* Floating Accent Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-40 blur-3xl"
            style={{
              background: `radial-gradient(circle, ${accentColor}, transparent 70%)`,
              width: `${Math.random() * 200 + 150}px`,
              height: `${Math.random() * 200 + 150}px`,
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 80}%`,
            }}
            animate={{
              x: [0, 15, -15, 0],
              y: [0, -10, 10, 0],
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Footer Layout */}
      <div className="relative max-w-6xl mx-auto flex flex-col items-center text-center gap-8 z-10 text-white">
        {/* Branding */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-[color:var(--theme-ring)] drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
            dev &lt;verse/&gt;
          </span>
          <span className="text-sm text-gray-200 opacity-90">
            Starter UI Kit – fully customizable
          </span>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {links.map((link) => (
            <Link
              key={link}
              to={`/${link.toLowerCase()}`}
              className="relative text-sm font-medium group transition-all text-gray-200 hover:text-white"
            >
              {link}
              <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-white transition-all duration-300 ease-out group-hover:w-full" />
            </Link>
          ))}
        </motion.div>

        {/* Subscription Form */}
        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className={cn(
              "px-4 py-2 rounded-md border backdrop-blur-md bg-white/15 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 transition-all text-sm text-center sm:text-left",
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
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-6 text-xl text-gray-200"
        >
          {socials.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 3 }}
              whileTap={{ scale: 0.9 }}
              className="transition-colors hover:text-white"
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
          transition={{ delay: 0.4 }}
          className="text-sm text-gray-300 opacity-80"
        >
          &copy; {new Date().getFullYear()} dev &lt;verse/&gt;. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};
