"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";
import { loginVariants } from "../utils/login.cva";
import { Button } from "../components/Button";
import { fadeUp, hoverScale, tapScale, staggerChildren } from "../utils/animations.cva";
import { FiMail, FiLock } from "react-icons/fi";
import { themes } from "../Styles/themes";

interface LoginProps {
  variant?: "stellar" | "bloom" | "minimalist";
}

export const Login: React.FC<LoginProps> = ({ variant = "stellar" }) => {
  // Pull theme colors
  const ring = themes[variant].colors.ring;
  const foreground = themes[variant].colors.foreground;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 py-16 px-4">
      <motion.div
        className={cn(loginVariants({ variant, size: "spacious" }))}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren(0.15)}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-6"
          variants={fadeUp}
        >
          Welcome Back
        </motion.h2>
        <motion.p
          className="text-center mb-8 opacity-70"
          variants={fadeUp}
        >
          Login to your account to continue
        </motion.p>

        <motion.form
          className="flex flex-col gap-4"
          variants={fadeUp}
        >
          {/* Email Input */}
          <div className="relative">
            <FiMail className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              className={cn(
                "w-full pl-10 pr-4 py-3 rounded-md border bg-white/10 placeholder:text-gray-400 focus:outline-none transition",
                `border-[${ring}] focus:ring-2 focus:ring-[${ring}] text-[${foreground}]`
              )}
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <FiLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className={cn(
                "w-full pl-10 pr-4 py-3 rounded-md border bg-white/10 placeholder:text-gray-400 focus:outline-none transition",
                `border-[${ring}] focus:ring-2 focus:ring-[${ring}] text-[${foreground}]`
              )}
            />
          </div>

          {/* Login Button */}
          <motion.div whileHover={hoverScale} whileTap={tapScale}>
            <Button variant={variant} size="md" className="w-full mt-2">
              Login
            </Button>
          </motion.div>
        </motion.form>

        {/* Footer Links */}
        <motion.div
          className="mt-6 flex justify-between text-sm text-gray-300"
          variants={fadeUp}
        >
          <a href="#" className={cn(`hover:text-[${ring}] transition`)}>
            Forgot Password?
          </a>
          <a href="/register" className={cn(`hover:text-[${ring}] transition`)}>
            Create Account
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};
