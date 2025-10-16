import { cva } from "class-variance-authority";
import { themes } from "../Styles/themes";

export const servicesVariants = cva(
  `
  relative w-full overflow-hidden flex flex-col items-center justify-center 
  transition-all duration-700 ease-in-out
  font-sans tracking-tight
  py-20 px-6 md:px-12
  `,
  {
    variants: {
      variant: {
        stellar: `
          bg-[${themes.stellar.colors.background}]
          text-[${themes.stellar.colors.foreground}]
          border-t border-[${themes.stellar.colors.border}]
          hover:bg-[${themes.stellar.colors.secondary}]
        `,
        bloom: `
          bg-[${themes.bloom.colors.background}]
          text-[${themes.bloom.colors.foreground}]
          border-t border-[${themes.bloom.colors.border}]
          hover:bg-[${themes.bloom.colors.secondary}]
        `,
        minimalist: `
          bg-[${themes.minimalist.colors.background}]
          text-[${themes.minimalist.colors.foreground}]
          border-t border-[${themes.minimalist.colors.border}]
          hover:bg-[${themes.minimalist.colors.secondary}]
        `,
      },
    },
    defaultVariants: {
      variant: "stellar",
    },
  }
);

export const getServiceStyles = (
  variant: "stellar" | "bloom" | "minimalist"
) => {
  const theme = themes[variant];
  return {
    accent: theme.colors.accent,
    border: theme.colors.border,
    background: theme.colors.background,
    secondary: theme.colors.secondary,
    radius: theme.radii.lg,
    shadow: theme.shadows.lg,
    cardHover: `${theme.colors.accent}33`, // subtle translucent accent glow
  };
};
