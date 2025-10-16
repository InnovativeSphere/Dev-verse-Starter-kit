import { cva } from "class-variance-authority";

export const footerVariants = cva(
  "relative w-full px-6 py-16 sm:py-20 overflow-hidden transition-colors duration-300 backdrop-blur-lg flex flex-col items-center justify-center border-t",
  {
    variants: {
      variant: {
        stellar: `
          bg-[var(--stellar-bg)]
          text-[var(--stellar-foreground)]
          border-[var(--stellar-border)]
        `,
        bloom: `
          bg-[var(--bloom-bg)]
          text-[var(--bloom-foreground)]
          border-[var(--bloom-border)]
        `,
        minimalist: `
          bg-[var(--minimalist-bg)]
          text-[var(--minimalist-foreground)]
          border-[var(--minimalist-border)]
        `,
      },
    },
    defaultVariants: {
      variant: "stellar",
    },
  }
);
