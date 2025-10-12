import React, { useState, type FocusEvent } from "react";
import { cn } from "../utils/cn";
import { formVariants } from "../utils/form.cva";
import { Button } from "./Button";
import { motion, type Variants } from "framer-motion";

interface FormProps {
  variant?: "stellar" | "bloom" | "minimalist";
}

export const Form: React.FC<FormProps> = ({ variant = "stellar" }) => {
  const [focused, setFocused] = useState<Record<string, boolean>>({});
  const [values, setValues] = useState<Record<string, string>>({});

  const handleFocus = (field: string) => setFocused((f) => ({ ...f, [field]: true }));
  const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
    if (!e.target.value) setFocused((f) => ({ ...f, [field]: false }));
  };
  const handleChange = (field: string, value: string) =>
    setValues((v) => ({ ...v, [field]: value }));

  const glowVariants: Variants = {
    initial: { opacity: 0.5, scale: 1 },
    animate: {
      opacity: [0.6, 1, 0.6],
      scale: [1, 1.05, 1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: ["easeInOut"],
      },
    },
  };

  return (
    <motion.div
      className="relative flex justify-center items-center perspective-1000"
      initial={{ rotateX: 10, opacity: 0 }}
      animate={{ rotateX: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      data-theme={variant}
    >
      {/* Floating accent blobs */}
      <motion.div
        className={cn("absolute w-48 h-48 rounded-full blur-3xl opacity-40", `bg-[var(--accent)]`)}
        style={{ top: "-4rem", left: "-3rem" }}
        variants={glowVariants}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className={cn("absolute w-56 h-56 rounded-full blur-3xl opacity-30", `bg-[var(--primary)]`)}
        style={{ bottom: "-5rem", right: "-4rem" }}
        variants={glowVariants}
        initial="initial"
        animate="animate"
      />

      <motion.form
        className={cn(formVariants({ variant }), "relative z-10 backdrop-blur-md")}
        whileHover={{ scale: 1.02, boxShadow: "0 8px 30px var(--accent)" }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Contact Us</h2>

        <div className="space-y-6">
          {[ 
            { name: "fullName", label: "Full Name", type: "text", placeholder: "Jane Doe" },
            { name: "email", label: "Email Address", type: "email", placeholder: "you@example.com" },
            { name: "subject", label: "Subject", type: "text", placeholder: "Project Inquiry" },
          ].map(({ name, label, type }) => (
            <div key={name} className="relative">
              <input
                type={type}
                id={name}
                value={values[name] || ""}
                onFocus={() => handleFocus(name)}
                onBlur={(e) => handleBlur(e, name)}
                onChange={(e) => handleChange(name, e.target.value)}
                className={cn(
                  "w-full p-3 rounded-md border bg-transparent shadow-inner focus:outline-none focus:ring-2 transition peer",
                  "border-[var(--accent)] focus:ring-[var(--primary)]"
                )}
                placeholder=" "
              />
              <label
                htmlFor={name}
                className={cn(
                  "absolute left-3 top-3 text-sm transition-all duration-200 pointer-events-none",
                  focused[name] || values[name]
                    ? "text-xs -translate-y-5 opacity-80"
                    : "text-gray-400"
                )}
              >
                {label}
              </label>
            </div>
          ))}

          <div className="relative">
            <textarea
              id="message"
              rows={4}
              value={values.message || ""}
              onFocus={() => handleFocus("message")}
              onBlur={(e) => handleBlur(e, "message")}
              onChange={(e) => handleChange("message", e.target.value)}
              className={cn(
                "w-full p-3 rounded-md border bg-transparent shadow-inner focus:outline-none focus:ring-2 transition resize-none peer",
                "border-[var(--accent)] focus:ring-[var(--primary)]"
              )}
              placeholder=" "
            />
            <label
              htmlFor="message"
              className={cn(
                "absolute left-3 top-3 text-sm transition-all duration-200 pointer-events-none",
                focused.message || values.message
                  ? "text-xs -translate-y-5 opacity-80"
                  : "text-gray-400"
              )}
            >
              Message
            </label>
          </div>

          <div className="pt-2 flex justify-center">
            <Button variant={variant} size="md">
              Send Message
            </Button>
          </div>
        </div>
      </motion.form>
    </motion.div>
  );
};
