import { cva } from "class-variance-authority";

export const aboutVariants = cva("relative transition-colors duration-700", {
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
});
