import { cva } from "class-variance-authority";
import { themes } from "../Styles/themes";

/**
 * Register form variants — themed via CSS variables
 * All color values are sourced directly from theme.ts
 */
export const registerVariants = cva(
  `
    w-full max-w-lg p-8 md:p-10 rounded-2xl 
    backdrop-blur-xl shadow-xl flex flex-col gap-6 
    border transition-all duration-300 ease-in-out
  `,
  {
    variants: {
      variant: {
        stellar: `
          bg-[color:var(--register-bg)]
          text-[color:var(--register-text)]
          border-[color:var(--register-border)]
          hover:shadow-[var(--register-hover-shadow)]
        `,
        bloom: `
          bg-[color:var(--register-bg)]
          text-[color:var(--register-text)]
          border-[color:var(--register-border)]
          hover:shadow-[var(--register-hover-shadow)]
        `,
        minimalist: `
          bg-[color:var(--register-bg)]
          text-[color:var(--register-text)]
          border-[color:var(--register-border)]
          hover:shadow-[var(--register-hover-shadow)]
        `,
      },
    },
    defaultVariants: {
      variant: "stellar",
    },
  }
);

export const getRegisterThemeVars = (variant: keyof typeof themes) => {
  const theme = themes[variant];
  return {
    "--register-bg": theme.colors.background,
    "--register-text": theme.colors.foreground,
    "--register-border": theme.colors.border,
    "--register-hover-shadow":
      variant === "stellar"
        ? "0 4px 16px rgba(69,162,158,0.25)"
        : variant === "bloom"
        ? "0 4px 16px rgba(255,182,193,0.25)"
        : "0 4px 16px rgba(0,0,0,0.1)",
  } as React.CSSProperties;
};
