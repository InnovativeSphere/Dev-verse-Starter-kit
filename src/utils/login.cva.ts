import { cva } from "class-variance-authority";
import { themes } from "../Styles/themes";

export const loginVariants = cva(
  `
    w-full max-w-md mx-auto rounded-xl flex flex-col
    transition-all duration-300 ease-in-out
    backdrop-blur-md relative border
  `,
  {
    variants: {
      variant: {
        stellar: `
          bg-[${themes.stellar.colors.background}]
          text-[${themes.stellar.colors.foreground}]
          border-[${themes.stellar.colors.border}]
          shadow-[${themes.stellar.shadows.lg}]
          hover:shadow-[0_8px_25px_rgba(102,252,241,0.25)]
        `,
        bloom: `
          bg-[${themes.bloom.colors.background}]
          text-[${themes.bloom.colors.foreground}]
          border-[${themes.bloom.colors.border}]
          shadow-[${themes.bloom.shadows.lg}]
          hover:shadow-[0_8px_25px_rgba(255,182,193,0.25)]
        `,
        minimalist: `
          bg-[${themes.minimalist.colors.background}]
          text-[${themes.minimalist.colors.textDark || "#1a1a1a"}]
          border-[${themes.minimalist.colors.border}]
          shadow-[${themes.minimalist.shadows.md}]
          hover:shadow-[0_6px_18px_rgba(0,0,0,0.12)]
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
