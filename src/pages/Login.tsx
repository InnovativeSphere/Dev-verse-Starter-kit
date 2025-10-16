"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";
import { loginVariants } from "../utils/login.cva";
import { Button } from "../components/Button";
import {
  fadeUp,
  hoverScale,
  tapScale,
  staggerChildren,
} from "../utils/animations.cva";
import { FiMail, FiLock } from "react-icons/fi";
import { themes } from "../Styles/themes";

interface LoginProps {
  variant?: "stellar" | "bloom" | "minimalist";
}

export const Login: React.FC<LoginProps> = ({ variant = "stellar" }) => {
  const theme = themes[variant];
  const ring = theme.colors.primary;
  const background = theme.colors.background;
  const text = theme.colors.text || theme.colors.foreground;
  const darkerText = theme.colors.textDark || "#1a1a1a";

  return (
    <div
      className={cn(
        "min-h-screen flex items-center justify-center px-4 py-20 mt-16 transition-colors duration-500",
        `bg-[${background}]`
      )}
    >
      <motion.div
        className={cn(loginVariants({ variant, size: "spacious" }))}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren(0.15)}
      >
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-6"
          style={{ color: darkerText }}
          variants={fadeUp}
        >
          Welcome Back
        </motion.h2>

        <motion.p
          className="text-center mb-8 opacity-90 "
          style={{ color: darkerText }}
          variants={fadeUp}
        >
          Login to your account to continue
        </motion.p>

        {/* Form */}
        <motion.form className="flex flex-col gap-5" variants={fadeUp}>
          {/* Email Input */}
          <div className="relative">
            <FiMail
              className="absolute left-3 top-3"
              size={20}
              style={{ color: darkerText, opacity: 0.7 }}
            />
            <input
              type="email"
              placeholder="Email"
              className={cn(
                "w-full pl-10 pr-4 py-3 rounded-md border bg-white/10 backdrop-blur-md placeholder:opacity-60 focus:outline-none transition-all duration-300",
                `border-[${ring}] focus:ring-2 focus:ring-[${ring}] text-[${darkerText}]`
              )}
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <FiLock
              className="absolute left-3 top-3"
              size={20}
              style={{ color: darkerText, opacity: 0.7 }}
            />
            <input
              type="password"
              placeholder="Password"
              className={cn(
                "w-full pl-10 pr-4 py-3 rounded-md border bg-white/10 backdrop-blur-md placeholder:opacity-60 focus:outline-none transition-all duration-300",
                `border-[${ring}] focus:ring-2 focus:ring-[${ring}] text-[${darkerText}]`
              )}
            />
          </div>

          {/* Login Button */}
          <motion.div whileHover={hoverScale} whileTap={tapScale}>
            <Button variant={variant} size="md" className="w-full mt-3">
              Login
            </Button>
          </motion.div>
        </motion.form>

        {/* Footer Links */}
        <motion.div
          className="mt-8 flex justify-between text-sm"
          style={{ color: text, opacity: 0.85 }}
          variants={fadeUp}
        >
          <a
            href="#"
            className={cn(
              "transition duration-300 hover:underline",
              `hover:text-[${ring}]`
            )}
          >
            Forgot Password?
          </a>
          <a
            href="/register"
            className={cn(
              "transition duration-300 hover:underline",
              `hover:text-[${ring}]`
            )}
          >
            Create Account
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};
