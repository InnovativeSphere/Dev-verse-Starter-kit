"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { cn } from "../utils/cn";
import { homeContainer, sectionContainer, showcase, testimonialCard } from "../utils/home.cva";
import { Button } from "../components/Button";
import { useRef } from "react";
import { animationVariants } from "../utils/animations.cva";
import { themes } from "../Styles/themes";

export const Home = ({ variant = "stellar" }: { variant?: "stellar" | "bloom" | "minimalist" }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [5, -5]);
  const rotateY = useTransform(x, [-50, 50], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const xVal = e.clientX - rect.left - rect.width / 2;
    const yVal = e.clientY - rect.top - rect.height / 2;
    x.set(xVal);
    y.set(yVal);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const theme = themes[variant];

  // Background blobs
  const blobColors = [theme.colors.accent1, theme.colors.accent2];

  return (
    <div className={cn(homeContainer({ variant }))}>
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {blobColors.map((color, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-25 mix-blend-multiply"
            style={{
              width: i === 0 ? "35vw" : "25vw",
              height: i === 0 ? "35vw" : "25vw",
              top: i === 0 ? "25%" : "auto",
              left: i === 0 ? "10%" : "auto",
              bottom: i === 1 ? "10%" : "auto",
              right: i === 1 ? "8%" : "auto",
              backgroundColor: color,
            }}
            animate={{
              x: i === 0 ? ["0%", "15%", "-10%"] : ["10%", "-10%", "5%"],
              y: i === 0 ? ["0%", "10%", "-5%"] : ["-5%", "20%", "10%"],
              scale: i === 0 ? [1, 1.15, 1] : [1.1, 0.9, 1],
            }}
            transition={{
              duration: i === 0 ? 25 : 28,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* HERO */}
      <section
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(sectionContainer({ size: "spacious", align: "center" }))}
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          transition={{ type: "spring", stiffness: 60, damping: 12 }}
          variants={animationVariants.fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          className="relative z-10 text-center"
        >
          <motion.h1
            variants={animationVariants.fadeUp}
            className={cn("text-4xl md:text-6xl font-bold mb-6", theme.colors.foreground)}
          >
            Build the{" "}
            <span className={cn(theme.colors.accentText)}>Future of Design</span>
          </motion.h1>

          <motion.p
            variants={animationVariants.fadeUp}
            className={cn("text-lg max-w-2xl mx-auto mb-8 opacity-85", theme.colors.foreground)}
          >
            A crafted set of components inspired by elegance, balance, and precision — built to delight both developers and users.
          </motion.p>

          <Button variant={variant} size="lg">
            Start Exploring
          </Button>
        </motion.div>
      </section>

      {/* SHOWCASE */}
      <motion.section
        className={cn(sectionContainer({ size: "normal" }))}
        variants={animationVariants.fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              id: 1,
              img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
              caption: "Modern Web Interfaces",
            },
            {
              id: 2,
              img: "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=900&q=80",
              caption: "Seamless User Experiences",
            },
            {
              id: 3,
              img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
              caption: "Designs that Inspire",
            },
          ].map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
              className={cn(showcase({ variant }))}
            >
              <img
                src={item.img}
                alt={item.caption}
                className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-4",
                  variant !== "minimalist" ? "" : "bg-gradient-to-t from-gray-300/20 to-transparent"
                )}
              >
                <p className={cn(variant === "minimalist" ? theme.colors.foreground : "text-white text-sm font-medium")}>
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* TESTIMONIALS */}
      <motion.section
        className={cn(sectionContainer({ size: "normal" }))}
        variants={animationVariants.fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className={cn("text-3xl font-semibold mb-10 text-center", theme.colors.foreground)}>
          Loved by Designers & Developers
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className={cn(testimonialCard({ variant }))}
            >
              <p className={cn("mb-4 text-sm opacity-90 leading-relaxed", theme.colors.foreground)}>
                “Absolutely stunning design system — fluid, modern, and a joy to work with. Every variant feels like its own personality.”
              </p>
              <h4 className={cn("font-semibold opacity-95", theme.colors.foreground)}>— Taylor R.</h4>
              <span className={cn("text-xs opacity-70", theme.colors.foreground)}>UI Engineer</span>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};
