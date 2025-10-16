"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../utils/cn";
import { themes } from "../Styles/themes";
import { navbarVariants } from "../utils/navbar.cva";
import { FaStar } from "react-icons/fa6";
import { Button } from "./Button";

interface NavbarProps {
  variant?: "stellar" | "bloom" | "minimalist";
}

const HAMBURGER_SIZE = { width: 28, height: 22 };

const slideVariants = {
  hidden: { x: "-100%" },
  visible: { x: 0 },
  exit: { x: "-100%" },
};

const lineMotion = {
  closedTop: { rotate: 0, y: 0 },
  closedMiddle: { opacity: 1 },
  closedBottom: { rotate: 0, y: 0 },
  openTop: { rotate: 45, y: 7 },
  openMiddle: { opacity: 0 },
  openBottom: { rotate: -45, y: -7 },
};

export const Navbar: React.FC<NavbarProps> = ({ variant = "stellar" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  const theme = themes[variant];
  const { accent, border, secondary } = theme.colors;

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
    { to: "/register", label: "Register" },
    { to: "/login", label: "Login" },
  ];

  // manage scroll lock
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = isOpen ? "hidden" : prev || "auto";
    return () => {
      document.body.style.overflow = prev || "auto";
    };
  }, [isOpen]);

  // accessibility trap
  useEffect(() => {
    if (!isOpen || !panelRef.current) return;
    const panel = panelRef.current;
    const focusable = panel.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return setIsOpen(false);
      if (e.key === "Tab") {
        if (!first || !last) return;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    first?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  const panelOrbs = [
    { size: 120, top: "10%", left: "12%", delay: 0 },
    { size: 80, top: "30%", left: "55%", delay: 1.5 },
    { size: 160, top: "65%", left: "20%", delay: 0.7 },
  ];

  // Dynamic contrast — ensures logo + menu icon visible on all variants
  const isDarkVariant = variant === "stellar";
  const baseTextColor = isDarkVariant ? "#F9FBFC" : "#111";
  const iconColor =
    variant === "minimalist"
      ? "#111" // dark icon for bright minimalist
      : isDarkVariant
      ? "#F9FBFC" // bright icon for dark background
      : accent; // bloom uses accent color
  const overlayBg = isDarkVariant
    ? "rgba(0,0,0,0.35)"
    : "rgba(255,255,255,0.25)";
  const hoverHighlight = isDarkVariant ? "#66FCF1" : accent;

  return (
    <motion.nav
      role="navigation"
      aria-label="Main navigation"
      className={cn(
        "absolute top-0 left-0 w-full z-20 overflow-visible transition-all duration-700 mb-4 sm:mb-8 md:mb-12",
        navbarVariants({ variant })
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* floating accent blobs */}
      {panelOrbs.map((o, i) => (
        <motion.div
          key={`header-orb-${i}`}
          className="absolute rounded-full blur-3xl pointer-events-none"
          style={{
            width: o.size,
            height: o.size,
            top: o.top,
            left: o.left,
            background: accent,
            opacity: isDarkVariant ? 0.15 : 0.1,
          }}
          animate={{
            y: [0, -10 + i * -4, 0],
            x: [0, 8 - i * 2, 0],
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: o.delay,
          }}
        />
      ))}

      {/* Header */}
      <div className="relative z-30 max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <motion.div
          className="flex items-center gap-3 cursor-pointer select-none"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <FaStar
            className="text-xl drop-shadow-md"
            style={{
              color: iconColor,
              filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.25))",
            }}
          />
          <motion.h1
            className="text-lg font-semibold tracking-tight"
            style={{
              color: baseTextColor,
              textShadow: "0 1px 3px rgba(0,0,0,0.3)",
            }}
          >
            NovaUI
          </motion.h1>
        </motion.div>

        {/* hamburger */}
        <motion.button
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((s) => !s)}
          className="p-2 rounded-md flex items-center justify-center ml-4"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          style={{ color: iconColor }}
        >
          <svg
            width={HAMBURGER_SIZE.width}
            height={HAMBURGER_SIZE.height}
            viewBox={`0 0 ${HAMBURGER_SIZE.width} ${HAMBURGER_SIZE.height}`}
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            {["Top", "Middle", "Bottom"].map((pos, i) => (
              <motion.rect
                key={pos}
                width="28"
                height="2"
                rx="1"
                x={0}
                y={i * 8 + 2}
                style={{ fill: iconColor }}
                variants={lineMotion}
                animate={isOpen ? `open${pos}` : `closed${pos}`}
                transform-origin={i === 0 ? "14 1" : i === 2 ? "14 19" : "14 10"}
              />
            ))}
          </svg>
        </motion.button>
      </div>

      {/* Slide-in menu (unchanged) */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
                background: overlayBg,
              }}
              onClick={() => setIsOpen(false)}
              aria-hidden
            />

            <motion.aside
              ref={panelRef}
              className="fixed top-0 left-0 h-full w-[70%] sm:w-[50%] md:w-[30%] p-6 flex flex-col gap-8 z-50"
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              style={{
                background: secondary,
                color: baseTextColor,
                borderRight: `1px solid ${border}`,
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              <nav className="relative z-20 mt-6 flex flex-col gap-5">
                {navLinks.map((link, i) => {
                  const active = isActive(link.to);
                  return (
                    <motion.div
                      key={link.to}
                      className="relative"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        to={link.to}
                        className="text-lg font-medium block py-1 transition-transform duration-300"
                        style={{
                          color: baseTextColor,
                          opacity: active ? 1 : 0.88,
                        }}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                      <motion.span
                        className="absolute left-0 bottom-0 h-[3px] rounded origin-left"
                        style={{
                          background: hoverHighlight,
                          opacity: active ? 1 : 0.65,
                        }}
                        animate={{
                          width: active ? "100%" : "0%",
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />
                    </motion.div>
                  );
                })}
              </nav>

              <div className="mt-auto relative z-20">
                <Button variant={variant} size="sm">
                  <Link to="/register">Get Started</Link>
                </Button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
