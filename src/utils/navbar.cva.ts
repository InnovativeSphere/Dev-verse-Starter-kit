import { cva } from "class-variance-authority";

export const navbarVariants = cva(
  "w-full transition-all duration-300 border-b",
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
