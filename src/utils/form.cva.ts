import { cva } from "class-variance-authority";
import { themes } from "../Styles/themes";

export const formVariants = cva(
  [
    "p-8 rounded-2xl shadow-lg w-full max-w-md",
    "relative overflow-hidden transition-all duration-500",
    "hover:shadow-2xl hover:translate-y-[-2px]",
  ].join(" "),
  {
    variants: {
      variant: {
        stellar: `
          bg-[${themes.stellar.colors.secondary}]
          text-[${themes.stellar.colors.foreground}]
          ring-2 ring-[${themes.stellar.colors.accent}]
          hover:ring-[${themes.stellar.colors.primaryHover}]
        `,
        bloom: `
          bg-[${themes.bloom.colors.secondary}]
          text-[${themes.bloom.colors.foreground}]
          ring-2 ring-[${themes.bloom.colors.accent}]
          hover:ring-[${themes.bloom.colors.primaryHover}]
        `,
        minimalist: `
          bg-[${themes.minimalist.colors.secondary}]
          text-[${themes.minimalist.colors.foreground}]
          ring-2 ring-[${themes.minimalist.colors.border}]
          hover:ring-[${themes.minimalist.colors.primaryHover}]
        `,
      },
    },
    defaultVariants: {
      variant: "stellar",
    },
  }
);
