import { cva } from "class-variance-authority";
import { themes } from "../Styles/themes";

export const contactVariants = cva(
  "relative min-h-screen flex flex-col items-center justify-center transition-colors duration-700",
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

export const contactFormVariants = cva(
  "relative z-10 w-full max-w-2xl rounded-2xl backdrop-blur-md p-10 shadow-lg border transition-all duration-300",
  {
    variants: {
      variant: {
        stellar: `
          border-[${themes.stellar.colors.border}]
          bg-[${themes.stellar.colors.secondary}]
          text-[${themes.stellar.colors.foreground}]
        `,
        bloom: `
          border-[${themes.bloom.colors.border}]
          bg-[${themes.bloom.colors.secondary}]
          text-[${themes.bloom.colors.foreground}]
        `,
        minimalist: `
          border-[${themes.minimalist.colors.border}]
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

export const contactInputVariants = cva(
  "p-3 rounded-lg border backdrop-blur-sm focus:outline-none focus:ring-2 transition-all",
  {
    variants: {
      variant: {
        stellar: `
          border-[${themes.stellar.colors.border}] 
          bg-[${themes.stellar.colors.secondary}]
          text-[${themes.stellar.colors.foreground}]
          placeholder-white/70 focus:ring-[${themes.stellar.colors.primaryHover}]
        `,
        bloom: `
          border-[${themes.bloom.colors.border}]
          bg-white/80
          text-[${themes.bloom.colors.foreground}]
          placeholder-rose-400/80 focus:ring-[${themes.bloom.colors.primary}]
        `,
        minimalist: `
          border-[${themes.minimalist.colors.border}]
          bg-[${themes.minimalist.colors.background}]
          text-[${themes.minimalist.colors.foreground}]
          placeholder-gray-500/80 focus:ring-[${themes.minimalist.colors.primary}]
        `,
      },
    },
    defaultVariants: {
      variant: "stellar",
    },
  }
);

export const contactButtonVariants = cva(
  "py-3 px-6 font-semibold rounded-lg transition-all shadow-md focus:outline-none",
  {
    variants: {
      variant: {
        stellar: `
          bg-[${themes.stellar.colors.primary}]
          text-white
          hover:bg-[${themes.stellar.colors.primaryHover}]
        `,
        bloom: `
          bg-[${themes.bloom.colors.primary}]
          text-white
          hover:bg-[${themes.bloom.colors.primaryHover}]
        `,
        minimalist: `
          bg-[${themes.minimalist.colors.primary}]
          text-white
          hover:bg-[${themes.minimalist.colors.primaryHover}]
        `,
      },
    },
    defaultVariants: {
      variant: "stellar",
    },
  }
);
