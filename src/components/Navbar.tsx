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
  const { accent, border, foreground, secondary } = theme.colors;

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
    { to: "/register", label: "Register" },
    { to: "/login", label: "Login" },
  ];

  // Disable body scroll when menu is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = isOpen ? "hidden" : prev || "auto";
    return () => {
      document.body.style.overflow = prev || "auto";
    };
  }, [isOpen]);

  // Focus trap for accessibility
  useEffect(() => {
    if (!isOpen || !panelRef.current) return;
    const panel = panelRef.current;
    const focusable = panel.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        return;
      }
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

  return (
    <motion.nav
      role="navigation"
      aria-label="Main navigation"
      className={cn(
        "absolute top-0 left-0 w-full z-20 overflow-visible transition-all duration-700",
        navbarVariants({ variant })
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* subtle hover glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none transition-all duration-500"
        style={{ backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)" }}
        whileHover={{
          backgroundColor: "rgba(255,255,255,0.05)",
          filter: "brightness(1.1)",
        }}
      />

      {/* background floating orbs */}
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
            opacity: 0.14,
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

      {/* Header content */}
      <div className="relative z-30 max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        {/* Brand */}
        <motion.div
          className="flex items-center gap-3 cursor-pointer select-none"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <FaStar className="text-xl" style={{ color: accent }} />
          <motion.h1
            className="text-lg font-semibold tracking-tight"
            style={{ color: foreground }}
          >
            NovaUI
          </motion.h1>
        </motion.div>

        {/* Hamburger */}
        <motion.button
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((s) => !s)}
          className="p-2 rounded-md flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          style={{ color: foreground }}
        >
          <svg
            width={HAMBURGER_SIZE.width}
            height={HAMBURGER_SIZE.height}
            viewBox={`0 0 ${HAMBURGER_SIZE.width} ${HAMBURGER_SIZE.height}`}
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <motion.rect
              width="28"
              height="2"
              rx="1"
              x={0}
              y={2}
              style={{ fill: foreground }}
              variants={lineMotion}
              animate={isOpen ? "openTop" : "closedTop"}
              transform-origin="14 1"
            />
            <motion.rect
              width="28"
              height="2"
              rx="1"
              x={0}
              y={10}
              style={{ fill: foreground }}
              variants={lineMotion}
              animate={isOpen ? "openMiddle" : "closedMiddle"}
            />
            <motion.rect
              width="28"
              height="2"
              rx="1"
              x={0}
              y={18}
              style={{ fill: foreground }}
              variants={lineMotion}
              animate={isOpen ? "openBottom" : "closedBottom"}
              transform-origin="14 19"
            />
          </svg>
        </motion.button>
      </div>

      {/* Mobile panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.28 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
                background: "rgba(0,0,0,0.25)",
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
                color: foreground,
                borderRight: `1px solid ${border}`,
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              }}
            >
              {/* Panel orbs */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
                {panelOrbs.map((o, idx) => (
                  <motion.div
                    key={`panel-orb-${idx}`}
                    className="absolute rounded-full blur-2xl"
                    style={{
                      width: o.size,
                      height: o.size,
                      top: o.top,
                      left: o.left,
                      background: accent,
                      opacity: 0.14,
                    }}
                    initial={{ y: 0, x: 0, opacity: 0.08 }}
                    animate={{
                      y: [0, -18 + idx * -6, 0],
                      x: [0, 8 - idx * 2, 0],
                      opacity: [0.06, 0.18, 0.06],
                    }}
                    transition={{
                      duration: 8 + idx * 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: idx * 0.6,
                    }}
                  />
                ))}
              </div>

              {/* Navigation links */}
              <nav className="relative z-20 mt-6 flex flex-col gap-5" aria-label="Main menu">
                {navLinks.map((link) => {
                  const active = isActive(link.to);
                  return (
                    <div key={link.to} className="relative">
                      <Link
                        to={link.to}
                        className="text-lg font-medium block py-1"
                        style={{ color: foreground }}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                      <motion.span
                        className="absolute left-0 bottom-0 h-[3px] rounded origin-left"
                        style={{
                          width: active ? "100%" : "0%",
                          background: accent,
                          opacity: active ? 0.95 : 0.6,
                        }}
                        animate={{ width: active ? "100%" : "0%" }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                      />
                    </div>
                  );
                })}
              </nav>

              {/* Get Started button */}
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
