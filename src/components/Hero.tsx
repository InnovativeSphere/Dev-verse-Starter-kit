import { type FC, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useScroll,
  useSpring,
  type Easing,
} from "framer-motion";
import { cn } from "../utils/cn";
import { heroVariants } from "../utils/hero.cva";
import { Button } from "./Button";

interface HeroProps {
  variant?: "stellar" | "bloom" | "minimalist";
}

export const Hero: FC<HeroProps> = ({ variant = "stellar" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // Scroll-based transforms
  const yScroll = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacityScroll = useTransform(scrollYProgress, [0, 0.6], [1, 0.5]);
  const textDepth = useTransform(scrollYProgress, [0, 0.6], [0, -80]);
  const textFade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Cursor-based parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 40, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 40, damping: 20 });
  const rotate = useTransform(smoothX, [-100, 100], [-4, 4]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    x.set((e.clientX - innerWidth / 2) / 25);
    y.set((e.clientY - innerHeight / 2) / 25);
  };

  const easeInOut: Easing = [0.65, 0, 0.35, 1];

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      data-theme={variant}
      className={cn(
        heroVariants({ variant }),
        "relative h-screen w-full flex flex-col items-center justify-center overflow-hidden"
      )}
    >
      {/* Background Gradient from Theme */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[var(--bg)] via-[var(--primary)] to-[var(--accent)]"
        style={{ opacity: opacityScroll, y: yScroll }}
      />

      {/* Floating Blobs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl mix-blend-screen opacity-40"
          style={{
            width: 240 + i * 150,
            height: 240 + i * 150,
            background: `radial-gradient(circle, var(--accent), transparent 70%)`,
            top: i === 0 ? "-10%" : i === 2 ? "auto" : "20%",
            bottom: i === 2 ? "-10%" : "auto",
            left: i % 2 === 0 ? "-10%" : "auto",
            right: i % 2 !== 0 ? "-10%" : "auto",
            zIndex: 1,
          }}
          animate={{
            y: [0, i % 2 === 0 ? 40 : -40, 0],
            x: [0, i % 2 === 0 ? -20 : 20, 0],
            scale: [1, 1.05, 1],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 18 + i * 5,
            repeat: Infinity,
            ease: easeInOut,
          }}
        />
      ))}

      {/* Hero Content */}
      <motion.div
        style={{ x: smoothX, y: smoothY, rotate, opacity: textFade, translateY: textDepth }}
        className="relative z-20 text-center px-6 py-12 max-w-3xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: easeInOut }}
          className={cn(
            "text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6 text-[var(--text)]"
          )}
        >
          Design the{" "}
          <span className="text-[var(--accent)]">Future</span> You Imagine
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className={cn(
            "max-w-xl mx-auto mb-10 text-base md:text-lg opacity-90 text-[var(--text)]"
          )}
        >
          A seamless blend of creativity and engineering. Smooth motion. Elegant visuals.  
          Experience a new dimension of digital craftsmanship.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button
            variant={variant}
            size="lg"
            className="font-medium px-8 py-3 rounded-full hover:scale-105 transition-transform"
          >
            Get Started
          </Button>
          <Button
            variant={variant}
            size="lg"
            className="font-medium px-8 py-3 rounded-full border border-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all"
          >
            Explore Themes
          </Button>
        </motion.div>
      </motion.div>

      {/* Overlay Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--bg)]/10 z-10"
        style={{ opacity: opacityScroll }}
      />
    </section>
  );
};
