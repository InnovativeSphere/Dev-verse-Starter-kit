import { cva } from "class-variance-authority";
import { themes } from "../Styles/themes";

/**
 * Layout (flex, justify-between) handled in the component.
 * CVA only controls theme-related tokens.
 */
export const navbarVariants = cva(
  "w-full transition-all duration-300 border-b",
  {
    variants: {
      variant: {
        stellar: `
          bg-[${themes.stellar.colors.secondary}]
          text-[${themes.stellar.colors.foreground}]
          border-[${themes.stellar.colors.border}]
          shadow-[0_4px_20px_${themes.stellar.shadows.sm}]
        `,
        bloom: `
          bg-[${themes.bloom.colors.secondary}]
          text-[${themes.bloom.colors.foreground}]
          border-[${themes.bloom.colors.border}]
          shadow-[0_4px_20px_${themes.bloom.shadows.sm}]
        `,
        minimalist: `
          bg-[${themes.minimalist.colors.secondary}]
          text-[${themes.minimalist.colors.foreground}]
          border-[${themes.minimalist.colors.border}]
          shadow-[0_4px_20px_${themes.minimalist.shadows.sm}]
        `,
      },
    },
    defaultVariants: {
      variant: "stellar",
    },
  }
);
