"use client";

import { type FC, useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { navbarVariants } from "../utils/navbar.cva";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { themes, type ThemeName } from "../Styles/themes";

interface NavBarProps {
  variant?: ThemeName;
}

const sections = [
  { id: "hero", label: "Home" },
  { id: "gallery", label: "Gallery" },
  { id: "testimonials", label: "Testimonials" },
  { id: "use-cases", label: "Use Cases" },
  { id: "about", label: "About" },
  { id: "cta", label: "Buy Now" },
];

export const NavBar: FC<NavBarProps> = ({ variant = "helio" }) => {
  const theme = themes[variant];
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Scroll listener for shadow + active highlighting
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      let current = "hero";
      sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) current = sec.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <motion.header
      data-testid="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(
        navbarVariants({ variant }),
        "fixed top-0 left-0 w-full z-50 backdrop-blur-lg transition-all duration-300",
        scrolled ? "shadow-md" : "shadow-none"
      )}
      style={{
        backgroundColor: theme.colors.card,
        borderColor: theme.colors.border,
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <motion.div
          data-testid="navbar-logo"
          className="text-xl font-bold cursor-pointer select-none"
          style={{ color: theme.colors.foreground }}
          whileHover={{ opacity: 0.8 }}
          onClick={() => smoothScroll("hero")}
        >
          Devverse
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          {sections.slice(0, -1).map((section) => (
            <motion.li key={section.id} whileHover={{ y: -2 }}>
              <a
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll(section.id);
                }}
                className="font-medium transition-colors duration-200"
                style={{
                  color:
                    activeSection === section.id
                      ? theme.colors.accent
                      : theme.colors.foreground,
                }}
              >
                {section.label}
              </a>
            </motion.li>
          ))}

          {/* Desktop CTA */}
        </ul>

        {/* Mobile Toggle */}
        <button
          data-testid="nav-hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="p-2 rounded-md md:hidden"
          style={{ color: theme.colors.foreground }}
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          menuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.25 }}
        className="md:hidden w-full overflow-hidden border-t"
        style={{
          backgroundColor: theme.colors.card,
          borderColor: theme.colors.border,
        }}
      >
        <ul className="flex flex-col py-4 space-y-4 items-center">
          {sections.slice(0, -1).map((section) => (
            <li key={section.id}>
              <motion.a
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll(section.id);
                }}
                whileHover={{ scale: 1.05 }}
                className="font-medium text-lg"
                style={{
                  color:
                    activeSection === section.id
                      ? theme.colors.accent
                      : theme.colors.foreground,
                }}
              >
                {section.label}
              </motion.a>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.header>
  );
};
