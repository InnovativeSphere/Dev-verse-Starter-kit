"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";
import { registerVariants } from "../utils/register.cva";
import { Button } from "../components/Button";
import { fadeUp, hoverScale, tapScale, staggerChildren } from "../utils/animations.cva";
import { FiMail, FiLock, FiUser, FiMapPin } from "react-icons/fi";
import { themes } from "../Styles/themes";

interface RegisterProps {
  variant?: "stellar" | "bloom" | "minimalist";
}

export const Register: React.FC<RegisterProps> = ({ variant = "stellar" }) => {
  // Pull theme colors
  const ring = themes[variant].colors.ring;
  const foreground = themes[variant].colors.foreground;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 py-16 px-4">
      <motion.div
        className={cn(registerVariants({ variant }))}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren(0.15)}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-6"
          variants={fadeUp}
        >
          Create Your Account
        </motion.h2>
        <motion.p
          className="text-center mb-8 opacity-70"
          variants={fadeUp}
        >
          Join our platform and start building amazing experiences
        </motion.p>

        <motion.form className="flex flex-col gap-4" variants={fadeUp}>
          {/* Full Name */}
          <div className="relative">
            <FiUser className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Full Name"
              className={cn(
                "w-full pl-10 pr-4 py-3 rounded-md border bg-white/10 placeholder:text-gray-400 focus:outline-none transition",
                `border-[${ring}] focus:ring-2 focus:ring-[${ring}] text-[${foreground}]`
              )}
            />
          </div>

          {/* Email */}
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

          {/* Address */}
          <div className="relative">
            <FiMapPin className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Address"
              className={cn(
                "w-full pl-10 pr-4 py-3 rounded-md border bg-white/10 placeholder:text-gray-400 focus:outline-none transition",
                `border-[${ring}] focus:ring-2 focus:ring-[${ring}] text-[${foreground}]`
              )}
            />
          </div>

          {/* Password */}
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

          {/* Confirm Password */}
          <div className="relative">
            <FiLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              placeholder="Confirm Password"
              className={cn(
                "w-full pl-10 pr-4 py-3 rounded-md border bg-white/10 placeholder:text-gray-400 focus:outline-none transition",
                `border-[${ring}] focus:ring-2 focus:ring-[${ring}] text-[${foreground}]`
              )}
            />
          </div>

          {/* Register Button */}
          <motion.div whileHover={hoverScale} whileTap={tapScale}>
            <Button variant={variant} size="md" className="w-full mt-2">
              Sign Up
            </Button>
          </motion.div>
        </motion.form>

        {/* Footer Links */}
        <motion.div
          className="mt-6 flex justify-between text-sm text-gray-300"
          variants={fadeUp}
        >
          <a href="/login" className={cn(`hover:text-[${ring}] transition`)}>
            Already have an account?
          </a>
          <a href="#" className={cn(`hover:text-[${ring}] transition`)}>
            Need Help?
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};
