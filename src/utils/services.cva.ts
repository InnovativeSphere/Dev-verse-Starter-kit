import { cva } from "class-variance-authority";
import { themes } from "../Styles/themes";

export const servicesVariants = cva(
  "relative w-full overflow-hidden flex flex-col items-center justify-center transition-all duration-700 font-sans tracking-tight",
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

export const getServiceStyles = (variant: "stellar" | "bloom" | "minimalist") => {
  const theme = themes[variant];
  return {
    accent: theme.colors.accent,
    border: theme.colors.border,
    radius: theme.radii.lg,
    shadow: theme.shadows.md,
  };
};
