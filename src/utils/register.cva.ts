import { cva } from "class-variance-authority";
import { themes } from "../Styles/themes";

export const registerVariants = cva(
  "w-full max-w-lg p-8 rounded-2xl backdrop-blur-lg shadow-xl flex flex-col gap-6 transition-colors duration-300",
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
    },
    defaultVariants: {
      variant: "stellar",
    },
  }
);
