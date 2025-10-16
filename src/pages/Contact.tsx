"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../utils/cn";
import { contactVariants } from "../utils/contact.cva";
import {
  contactFormVariants,
  contactInputVariants,
} from "../utils/contactForm.cva";
import { Button } from "../components/Button";
import { useState } from "react";

export interface ContactProps {
  variant?: "stellar" | "bloom" | "minimalist";
}

export const Contact = ({ variant = "stellar" }: ContactProps) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const accentGradient =
    variant === "stellar"
      ? "from-indigo-500/50 to-purple-500/50"
      : variant === "bloom"
      ? "from-pink-400/50 to-rose-500/50"
      : "from-gray-700/50 to-gray-500/50";

  const accentGlow =
    variant === "stellar"
      ? "shadow-[0_0_30px_rgba(99,102,241,0.5)]"
      : variant === "bloom"
      ? "shadow-[0_0_30px_rgba(236,72,153,0.5)]"
      : "shadow-[0_0_30px_rgba(107,114,128,0.4)]";

  return (
    <section
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden py-20 mt-16", // ✅ Added top margin
        contactVariants({ variant })
      )}
    >
      {/* 🌌 Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {variant === "stellar" && (
          <div className="absolute w-[700px] h-[700px] bg-gradient-to-br from-indigo-600/40 to-purple-500/40 rounded-full blur-3xl top-[-10%] left-[-10%]" />
        )}
        {variant === "bloom" && (
          <div className="absolute w-[600px] h-[600px] bg-gradient-to-br from-pink-300/50 to-rose-400/50 rounded-full blur-3xl bottom-[-15%] right-[-10%]" />
        )}
        {variant === "minimalist" && (
          <div className="absolute w-[500px] h-[500px] bg-neutral-200/40 rounded-full blur-3xl top-[-5%] left-[20%]" />
        )}
      </div>

      {/* 💬 Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className={cn(contactFormVariants({ variant }), "relative z-10")}
      >
        <h2 className="text-4xl font-bold text-center mb-6">
          {variant === "stellar" && "Reach for the Stars ✨"}
          {variant === "bloom" && "Let's Grow Together 🌸"}
          {variant === "minimalist" && "We’d Love to Hear From You 💬"}
        </h2>

        <p className="text-center mb-10 text-base opacity-80">
          Have a question, idea, or partnership in mind? Drop us a message
          below.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={handleChange}
            className={cn(contactInputVariants({ variant }))}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={handleChange}
            className={cn(contactInputVariants({ variant }))}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            value={form.message}
            onChange={handleChange}
            className={cn(contactInputVariants({ variant }))}
          />

          {/* ✅ Integrated your Button component */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Button variant={variant}>Send Message</Button>
          </motion.div>
        </form>

        {/* 🎉 Floating Success Overlay */}
        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -10 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={cn(
                "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-[85%] max-w-sm rounded-2xl backdrop-blur-xl p-8 text-white font-semibold bg-gradient-to-br border border-white/20 shadow-2xl",
                accentGradient,
                accentGlow
              )}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 120 }}
                className="text-2xl font-bold mb-2"
              >
                Message Sent ✅
              </motion.div>
              <p className="text-sm opacity-85 text-center">
                We’ve received your message — we’ll be in touch soon!
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
