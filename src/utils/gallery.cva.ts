import { cva } from "class-variance-authority";

export const galleryVariants = cva(
  "relative w-full transition-colors duration-700",
  {
    variants: {
      variant: {
        helio: "",
        equinox: "",
        glacia: "",
        flora: "",
        mono: "",
      },
    },
    defaultVariants: {
      variant: "helio",
    },
  }
);
