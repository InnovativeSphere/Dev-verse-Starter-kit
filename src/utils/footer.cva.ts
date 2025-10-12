import { cva } from "class-variance-authority";
import { themes } from "../Styles/themes";

export const footerVariants = cva(
  "relative w-full px-6 py-16 sm:py-20 overflow-hidden transition-colors duration-300 backdrop-blur-lg flex flex-col items-center justify-center",
  {
    variants: {
      variant: {
        stellar: `
          bg-[${themes.stellar.colors.secondary}]
          text-[${themes.stellar.colors.foreground}]
        `,
        bloom: `
          bg-[${themes.bloom.colors.secondary}]
          text-[${themes.bloom.colors.foreground}]
        `,
        minimalist: `
          bg-[${themes.minimalist.colors.secondary}]
          text-[${themes.minimalist.colors.foreground}]
        `,
      },
    },
    defaultVariants: {
      variant: "stellar",
    },
  }
);
