"use client";

import React, { type FC, useEffect, useRef, useState } from "react";
import { cn } from "../utils/cn";
import { galleryVariants } from "../utils/gallery.cva";
import { themes, type ThemeName } from "../Styles/themes";

interface Slide {
  id: string;
  image: string;
  title: string;
  desc: string;
  tags?: string[];
}

const slides: Slide[] = [
  {
    id: "s1",
    image: "https://images.unsplash.com/photo-1609535765746-46dfd86fca8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fG5pa2UlMjBzbmVha2Vyc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Nike Air Max 270",
    desc: "Premium comfort meets iconic design in these classic kicks.",
    tags: ["Nike", "Sneaker"],
  },
  {
    id: "s2",
    image:
      "https://images.unsplash.com/photo-1607792246511-0b5f445700b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5pa2UlMjBzbmVha2Vyc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Nike Air Force 1",
    desc: "Timeless silhouette for everyday style and durability.",
    tags: ["Nike", "Sneaker"],
  },
  {
    id: "s3",
    image:
      "https://images.unsplash.com/photo-1607792246511-0b5f445700b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5pa2UlMjBzbmVha2Vyc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Nike Dunk Low",
    desc: "Street-ready design with bold colorways and comfort.",
    tags: ["Nike", "Sneaker"],
  },
  {
    id: "s4",
    image:
      "https://images.unsplash.com/photo-1637744360335-4df6d1d5ecf6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5pa2UlMjBzbmVha2Vyc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Nike React Infinity",
    desc: "Performance-driven, lightweight cushioning for every move.",
    tags: ["Nike", "Sneaker"],
  },
  {
    id: "s5",
    image:
      "https://images.unsplash.com/photo-1607792246466-17b46ae157d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5pa2UlMjBzbmVha2Vyc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Nike ZoomX",
    desc: "Race-day speed meets comfort in innovative technology.",
    tags: ["Nike", "Sneaker"],
  },
];

export const ProductGallery: FC<{ variant?: ThemeName }> = ({
  variant = "helio",
}) => {
  const theme = themes[variant];
  const [index, setIndex] = useState(0);
  const length = slides.length;
  const autoRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const goNext = () => setIndex((s) => (s + 1) % length);
  const goPrev = () => setIndex((s) => (s - 1 + length) % length);

  useEffect(() => {
    startAuto();
    return stopAuto;
  }, []);

  useEffect(() => {
    stopAuto();
    startAuto();
    return stopAuto;
  }, [index]);

  function startAuto() {
    stopAuto();
    autoRef.current = window.setInterval(() => {
      setIndex((s) => (s + 1) % length);
    }, 3000);
  }
  function stopAuto() {
    if (autoRef.current) {
      window.clearInterval(autoRef.current);
      autoRef.current = null;
    }
  }

  const handlePointerEnter = () => stopAuto();
  const handlePointerLeave = () => startAuto();

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
    stopAuto();
  };
  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const onTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const delta = touchStartX.current - touchEndX.current;
      if (Math.abs(delta) > 40) {
        if (delta > 0) goNext();
        else goPrev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
    startAuto();
  };

  const computeStyle = (i: number) => {
    const offset = i - index;
    let wrapped = offset;
    if (offset > length / 2) wrapped = offset - length;
    if (offset < -length / 2) wrapped = offset + length;

    const abs = Math.abs(wrapped);
    const baseTranslate = 40;
    const translateX = wrapped * baseTranslate;
    const rotateY = wrapped * 6;
    const scale = 1 - abs * 0.08;
    const opacity = 1 - abs * 0.18;
    const zIndex = 30 - abs * 5;
    const translateY = wrapped === 0 ? -10 : 0; // Rise transition for active card

    return {
      transform: `translateX(${translateX}%) translateY(${translateY}px) rotateY(${rotateY}deg) scale(${scale})`,
      zIndex,
      opacity,
      filter: `blur(${Math.min(abs * 4, 6)}px)`,
      transition:
        "transform 420ms cubic-bezier(.2,.9,.2,1), opacity 320ms ease-out, filter 420ms ease-out",
    } as React.CSSProperties;
  };

  return (
    <section
      id="gallery"
      data-testid="product-gallery"
      className={cn(galleryVariants({ variant }), "py-24 px-4 md:px-8")}
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.foreground,
        fontFamily: theme.fontFamily,
      }}
      aria-label="Product gallery"
    >
      <div className="max-w-6xl mx-auto">
        <div
          ref={containerRef}
          onMouseEnter={handlePointerEnter}
          onMouseLeave={handlePointerLeave}
          onFocus={handlePointerEnter}
          onBlur={handlePointerLeave}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="relative overflow-visible select-none"
        >
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none -z-10"
            style={{
              background: `radial-gradient(circle at center, ${theme.colors.accent}22, transparent 25%)`,
              filter: "blur(18px)",
            }}
          />

          <div
            className="relative h-[320px] md:h-[360px] flex items-center justify-center"
            role="list"
            data-testid="gallery-list"
          >
            {slides.map((s, i) => {
              const style = computeStyle(i);

              return (
                <article
                  key={s.id}
                  role="listitem"
                  data-testid={`gallery-card-${i}`}
                  className={cn(
                    "absolute w-[60%] md:w-[44%] lg:w-[34%] rounded-2xl overflow-hidden",
                    "shadow-lg"
                  )}
                  style={{
                    ...style,
                    boxShadow: theme.shadows.lg,
                    borderRadius: theme.radii.lg,
                    border: `1px solid ${theme.colors.border}`,
                    background: theme.colors.card,
                    cursor: "grab",
                  }}
                  onMouseDown={() => stopAuto()}
                  onMouseUp={() => startAuto()}
                >
                  <figure className="relative w-full h-full flex flex-col">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      data-testid={`gallery-img-${i}`}
                      className="w-full h-[65%] object-cover transition-transform duration-300 ease-out hover:scale-[1.03]"
                      style={{ display: "block" }}
                    />

                    <figcaption className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h3
                          className="text-lg md:text-xl font-semibold mb-1"
                          style={{ color: theme.colors.foreground }}
                        >
                          {s.title}
                        </h3>
                        <p
                          className="text-sm opacity-80 mb-3"
                          style={{ color: theme.colors.foreground }}
                        >
                          {s.desc}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 flex-wrap">
                        {(s.tags || []).map((t, ti) => (
                          <span
                            key={ti}
                            className="text-xs px-2 py-1 rounded-full"
                            style={{
                              background: theme.colors.secondary,
                              color: theme.colors.foreground,
                            }}
                            data-testid={`gallery-tag-${i}-${ti}`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </figcaption>
                  </figure>
                </article>
              );
            })}
          </div>

          <div className="flex items-center justify-center gap-3 mt-6">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                data-testid={`gallery-dot-${i}`}
                onClick={() => setIndex(i)}
                className="w-3 h-3 rounded-full transition-all"
                style={{
                  background:
                    i === index ? theme.colors.accent : theme.colors.border,
                  opacity: i === index ? 1 : 0.6,
                }}
              />
            ))}
          </div>

          <div className="absolute left-4 top-1/2 -translate-y-1/2 md:left-6">
            <button
              aria-label="Previous"
              data-testid="gallery-prev"
              onClick={() => {
                goPrev();
                startAuto();
              }}
              className="p-2 rounded-full border"
              style={{
                borderColor: theme.colors.border,
                color: theme.colors.foreground,
                background: theme.colors.card,
              }}
            >
              ‹
            </button>
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 md:right-6">
            <button
              aria-label="Next"
              data-testid="gallery-next"
              onClick={() => {
                goNext();
                startAuto();
              }}
              className="p-2 rounded-full border"
              style={{
                borderColor: theme.colors.border,
                color: theme.colors.foreground,
                background: theme.colors.card,
              }}
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
