import { cva } from "class-variance-authority";
import { themes } from "../Styles/themes";

export const heroVariants = cva(
  "relative flex flex-col items-center justify-center text-center overflow-hidden py-20 px-6 transition-colors duration-500",
  {
    variants: {
      variant: {
        stellar: `
          bg-[${themes.stellar.colors.background}]
          text-[${themes.stellar.colors.foreground}]
        `,
        bloom: `
          bg-[${themes.bloom.colors.background}]
          text-[${themes.bloom.colors.foreground}]
        `,
        minimalist: `
          bg-[${themes.minimalist.colors.background}]
          text-[${themes.minimalist.colors.foreground}]
        `,
      },
    },
    defaultVariants: {
      variant: "stellar",
    },
  }
);
