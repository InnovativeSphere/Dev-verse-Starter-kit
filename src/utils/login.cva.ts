import { cva } from "class-variance-authority";
import { themes } from "../Styles/themes";

export const loginVariants = cva(
  "w-full max-w-md mx-auto rounded-xl shadow-xl flex flex-col transition-colors duration-300",
  {
    variants: {
      variant: {
        stellar: `
          bg-[${themes.stellar.colors.background}]
          text-[${themes.stellar.colors.foreground}]
          ring-[${themes.stellar.colors.primary}]
        `,
        bloom: `
          bg-[${themes.bloom.colors.background}]
          text-[${themes.bloom.colors.foreground}]
          ring-[${themes.bloom.colors.primary}]
        `,
        minimalist: `
          bg-[${themes.minimalist.colors.background}]
          text-[${themes.minimalist.colors.foreground}]
          ring-[${themes.minimalist.colors.primary}]
        `,
      },
      size: {
        normal: "p-6 md:p-10",
        spacious: "p-8 md:p-12",
      },
    },
    defaultVariants: {
      variant: "stellar",
      size: "normal",
    },
  }
);
