import { cva } from "class-variance-authority";
import { themes } from "../Styles/themes";

/**
 * Same layout as before — only color tokens updated
 * for solid contrast and visibility across all themes.
 */
export const navbarVariants = cva(
  "w-full transition-all duration-300 border-b",
  {
    variants: {
      variant: {
        stellar: `
          bg-[${themes.stellar.colors.primary}]
          text-[${themes.stellar.colors.foreground}]
          border-[${themes.stellar.colors.border}]
          shadow-[0_4px_20px_rgba(69,162,158,0.25)]
        `,
        bloom: `
          bg-[${themes.bloom.colors.secondary}]
          text-[${themes.bloom.colors.foreground}]
          border-[${themes.bloom.colors.border}]
          shadow-[0_4px_20px_rgba(255,182,193,0.25)]
        `,
        minimalist: `
          bg-[${themes.minimalist.colors.primary}]
          text-[${themes.minimalist.colors.foreground}]
          border-[${themes.minimalist.colors.border}]
          shadow-[0_4px_20px_rgba(0,0,0,0.1)]
        `,
      },
    },
    defaultVariants: {
      variant: "stellar",
    },
  }
);
