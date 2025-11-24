"use client";

import { type FC, useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { testimonialVariants } from "../utils/testimonialVariants.cva";
import { themes, type ThemeName } from "../Styles/themes";
import { FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";

interface Testimonial {
  id: string;
  name: string;
  quote: string;
  rating: number; // 1-5
}

interface TestimonialsProps {
  variant?: ThemeName;
  autoScroll?: boolean;
  scrollInterval?: number; // ms
}

const defaultTestimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Alice Johnson",
    quote: "Nike sneakers changed my daily workouts. So comfy and stylish!",
    rating: 5,
  },
  {
    id: "t2",
    name: "Marcus Lee",
    quote: "The design is iconic, and the comfort is unmatched.",
    rating: 4,
  },
  {
    id: "t3",
    name: "Sophie Clarke",
    quote: "I get compliments every time I wear these sneakers.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Daniel Kim",
    quote: "Perfect fit and style for everyday use.",
    rating: 4,
  },
  {
    id: "t5",
    name: "Emma Davis",
    quote: "I love the way they feel when running long distances.",
    rating: 5,
  },
];

export const Testimonials: FC<TestimonialsProps> = ({
  variant = "helio",
  autoScroll = true,
  scrollInterval = 5000,
}) => {
  const theme = themes[variant];
  const [index, setIndex] = useState(0);
  const length = defaultTestimonials.length;

  // Auto-scroll
  useEffect(() => {
    if (!autoScroll) return;
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % length);
    }, scrollInterval);
    return () => clearInterval(interval);
  }, [autoScroll, length, scrollInterval]);

  const computeStyle = (i: number) => {
    let offset = i - index;
    if (offset > length / 2) offset -= length;
    if (offset < -length / 2) offset += length;

    const abs = Math.abs(offset);

    // 3D rotation
    const rotateY = offset * 15; // degrees
    const translateX = offset * 70; // % horizontal movement
    const scale = offset === 0 ? 1 : 0.85;
    const opacity = offset === 0 ? 1 : 0.5;
    const blur = offset === 0 ? 0 : 4;
    const zIndex = 30 - abs * 5;

    return { translateX, rotateY, scale, opacity, blur, zIndex };
  };

  return (
    <section
      id="testimonials"
      className={cn(testimonialVariants({ variant }))}
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.foreground,
        fontFamily: theme.fontFamily,
      }}
      aria-label="Customer Testimonials"
    >
      <div className="max-w-6xl mx-auto mt-24 pt-12 px-4 md:px-8">
        <header className="text-center mb-10">
          <h2
            className="text-3xl md:text-4xl font-semibold"
            style={{ color: theme.colors.foreground }}
          >
            What People Are Saying
          </h2>
          <p
            className="text-sm md:text-base mt-2 opacity-80 max-w-xl mx-auto"
            style={{ color: theme.colors.muted }}
          >
            Real feedback from our happy customers. See why Nike sneakers are
            loved worldwide.
          </p>
        </header>

        <div className="relative w-full flex justify-center items-center h-[220px] md:h-[360px] overflow-visible perspective-[1200px]">
          {defaultTestimonials.map((t, i) => {
            const { translateX, rotateY, scale, opacity, blur, zIndex } =
              computeStyle(i);

            return (
              <motion.article
                key={t.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  x: `${translateX}%`,
                  rotateY,
                  scale,
                  opacity,
                  filter: `blur(${blur}px)`,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute w-[75%] md:w-[50%] rounded-2xl overflow-hidden shadow-lg flex flex-col p-6"
                style={{
                  zIndex,
                  background: theme.colors.card,
                  boxShadow: theme.shadows.lg,
                  borderRadius: theme.radii.lg,
                  cursor: "default",
                }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <FaUserCircle className="w-12 h-12 text-gray-400" />
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: theme.colors.foreground }}
                  >
                    {t.name}
                  </h3>
                </div>
                <p
                  className="text-sm opacity-80 mb-3"
                  style={{ color: theme.colors.foreground }}
                >
                  "{t.quote}"
                </p>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <span
                      key={star}
                      style={{
                        color:
                          star < t.rating ? "#FFD700" : theme.colors.border,
                      }}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
