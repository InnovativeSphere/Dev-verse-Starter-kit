import { cva } from "class-variance-authority";

export const aboutVariants = cva(
  "relative transition-colors duration-700",
  {
    variants: {
      variant: {
        stellar: "bg-gradient-to-br from-slate-950 via-indigo-900 to-purple-900 text-white",
        bloom: "bg-gradient-to-br from-pink-50 via-rose-50 to-white text-rose-900", // darker text for better readability
        minimalist: "bg-gradient-to-br from-white via-gray-100 to-neutral-50 text-gray-900", // stronger contrast
      },
    },
    defaultVariants: {
      variant: "stellar",
    },
  }
);
