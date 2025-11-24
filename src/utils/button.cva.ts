import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-md select-none relative overflow-hidden",
  {
    variants: {
      size: {
        sm: "",
        md: "",
        lg: "",
      },
      variant: {
        helio: "",
        equinox: "",
        glacia: "",
        flora: "",
        mono: "",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "helio",
    },
  }
);
