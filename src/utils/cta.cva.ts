import { cva } from "class-variance-authority";
import { themes } from "../Styles/themes";

export const ctaContainer = cva(
  "relative w-full overflow-hidden flex flex-col items-center justify-center py-32 px-6 md:px-12 text-center transition-colors duration-700 ease-out",
  {
    variants: {
      variant: {
        stellar: `
          bg-gradient-to-br from-[${themes.stellar.colors.primary}] via-[${themes.stellar.colors.accent}] to-[${themes.stellar.colors.secondary}]
          text-[${themes.stellar.colors.foreground}]
          font-[${themes.stellar.fontFamily}]
        `,
        bloom: `
          bg-gradient-to-br from-[${themes.bloom.colors.secondary}] via-[${themes.bloom.colors.accent}] to-[${themes.bloom.colors.primaryHover}]
          text-[${themes.bloom.colors.foreground}]
          font-[${themes.bloom.fontFamily}]
        `,
        minimalist: `
          bg-gradient-to-br from-[${themes.minimalist.colors.secondary}] via-[${themes.minimalist.colors.accent}] to-[${themes.minimalist.colors.background}]
          text-[${themes.minimalist.colors.foreground}]
          font-[${themes.minimalist.fontFamily}]
        `,
      },
    },
    defaultVariants: {
      variant: "stellar",
    },
  }
);

export const ctaTitle = cva(
  "text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-md",
  {
    variants: {
      variant: {
        stellar: `text-[${themes.stellar.colors.foreground}]`,
        bloom: `text-[${themes.bloom.colors.foreground}]`,
        minimalist: `text-[${themes.minimalist.colors.foreground}]`,
      },
    },
    defaultVariants: {
      variant: "stellar",
    },
  }
);

export const ctaSubtitle = cva(
  "text-lg md:text-xl font-medium opacity-90 mb-10 leading-relaxed max-w-3xl mx-auto",
  {
    variants: {
      variant: {
        stellar: `text-[${themes.stellar.colors.foreground}] opacity-80`,
        bloom: `text-[${themes.bloom.colors.foreground}] opacity-85`,
        minimalist: `text-[${themes.minimalist.colors.foreground}] opacity-80`,
      },
    },
    defaultVariants: {
      variant: "stellar",
    },
  }
);

export const ctaButton = cva(
  "relative inline-block px-10 py-4 font-semibold rounded-full shadow-lg transition-all duration-500",
  {
    variants: {
      variant: {
        stellar: `
          bg-[${themes.stellar.colors.primary}] 
          text-[${themes.stellar.colors.foreground}]
          hover:scale-105 hover:shadow-[0_0_25px_${themes.stellar.colors.primaryHover}]
        `,
        bloom: `
          bg-[${themes.bloom.colors.primary}] 
          text-white 
          hover:scale-105 hover:shadow-[0_0_25px_${themes.bloom.colors.primaryHover}]
        `,
        minimalist: `
          bg-[${themes.minimalist.colors.primary}] 
          text-white 
          hover:scale-105 hover:shadow-[0_0_25px_${themes.minimalist.colors.primaryHover}]
        `,
      },
    },
    defaultVariants: {
      variant: "stellar",
    },
  }
);
