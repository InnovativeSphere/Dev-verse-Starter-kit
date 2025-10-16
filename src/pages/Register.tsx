"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";
import { registerVariants, getRegisterThemeVars } from "../utils/register.cva";
import { Button } from "../components/Button";
import {
  fadeUp,
  hoverScale,
  tapScale,
  staggerChildren,
} from "../utils/animations.cva";
import { FiMail, FiLock, FiUser, FiMapPin } from "react-icons/fi";
import { themes } from "../Styles/themes";

interface RegisterProps {
  variant?: "stellar" | "bloom" | "minimalist";
}

export const Register: React.FC<RegisterProps> = ({ variant = "stellar" }) => {
  const theme = themes[variant];

  // colors from theme.ts
  const foreground = theme.colors.foreground;
  const primary = theme.colors.primary;
  const border = theme.colors.border;
  const background = theme.colors.background;

  // input background per theme
  const inputBg =
    variant === "minimalist"
      ? "bg-white text-[#111] placeholder:text-gray-500"
      : "bg-white/10 text-white placeholder:text-white/70";

  return (
    <div
      className="min-h-screen flex items-center justify-center py-24 px-4"
      style={{ backgroundColor: background }}
    >
      <motion.div
        className={cn(registerVariants({ variant }))}
        style={getRegisterThemeVars(variant)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren(0.15)}
      >
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-6"
          style={{ color: foreground }}
          variants={fadeUp}
        >
          Create Your Account
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-center mb-8 opacity-75"
          style={{ color: foreground }}
          variants={fadeUp}
        >
          Join our platform and start building amazing experiences
        </motion.p>

        {/* Form */}
        <motion.form className="flex flex-col gap-4" variants={fadeUp}>
          {/* Full Name */}
          <div className="relative">
            <FiUser className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Full Name"
              className={cn(
                `w-full pl-10 pr-4 py-3 rounded-md border focus:outline-none transition ${foreground}`
              )}
              style={{
                borderColor: border,
                color: foreground,
                boxShadow: `0 0 0 2px transparent`,
              }}
              onFocus={(e) => (e.currentTarget.style.boxShadow = `0 0 0 2px ${primary}`)}
              onBlur={(e) => (e.currentTarget.style.boxShadow = `0 0 0 2px transparent`)}
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FiMail className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              className={cn(
                `w-full pl-10 pr-4 py-3 rounded-md border focus:outline-none transition ${foreground}`
              )}
              style={{
                borderColor: border,
                color: foreground,
              }}
              onFocus={(e) => (e.currentTarget.style.boxShadow = `0 0 0 2px ${primary}`)}
              onBlur={(e) => (e.currentTarget.style.boxShadow = `0 0 0 2px transparent`)}
            />
          </div>

          {/* Address */}
          <div className="relative">
            <FiMapPin className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Address"
              className={cn(
                `w-full pl-10 pr-4 py-3 rounded-md border focus:outline-none transition ${foreground}`
              )}
              style={{
                borderColor: border,
                color: foreground,
              }}
              onFocus={(e) => (e.currentTarget.style.boxShadow = `0 0 0 2px ${primary}`)}
              onBlur={(e) => (e.currentTarget.style.boxShadow = `0 0 0 2px transparent`)}
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FiLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className={cn(
                `w-full pl-10 pr-4 py-3 rounded-md border focus:outline-none transition ${foreground}`
              )}
              style={{
                borderColor: border,
                color: foreground,
              }}
              onFocus={(e) => (e.currentTarget.style.boxShadow = `0 0 0 2px ${primary}`)}
              onBlur={(e) => (e.currentTarget.style.boxShadow = `0 0 0 2px transparent`)}
            />
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <FiLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              placeholder="Confirm Password"
              className={cn(
                `w-full pl-10 pr-4 py-3 rounded-md border focus:outline-none transition ${foreground}`
              )}
              style={{
                borderColor: border,
                color: foreground,
              }}
              onFocus={(e) => (e.currentTarget.style.boxShadow = `0 0 0 2px ${primary}`)}
              onBlur={(e) => (e.currentTarget.style.boxShadow = `0 0 0 2px transparent`)}
            />
          </div>

          {/* Submit */}
          <motion.div whileHover={hoverScale} whileTap={tapScale}>
            <Button
              variant={variant}
              size="md"
              className="w-full mt-3 font-medium"
            >
              Sign Up
            </Button>
          </motion.div>
        </motion.form>

        {/* Footer Links */}
        <motion.div
          className="mt-8 flex justify-between text-sm opacity-80"
          variants={fadeUp}
          style={{ color: foreground }}
        >
          <a
            href="/login"
            className="transition"
            style={{ color: foreground }}
            onMouseEnter={(e) => (e.currentTarget.style.color = primary)}
            onMouseLeave={(e) => (e.currentTarget.style.color = foreground)}
          >
            Already have an account?
          </a>
          <a
            href="#"
            className="transition"
            style={{ color: foreground }}
            onMouseEnter={(e) => (e.currentTarget.style.color = primary)}
            onMouseLeave={(e) => (e.currentTarget.style.color = foreground)}
          >
            Need Help?
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};
