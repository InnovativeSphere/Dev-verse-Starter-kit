import { cva } from "class-variance-authority";
import { themes } from "../Styles/themes";

export const homeContainer = cva(
  "relative flex flex-col items-center justify-center overflow-hidden min-h-screen transition-colors duration-500 font-sans",
  {
    variants: {
      variant: {
        stellar: `bg-[${themes.stellar.colors.background}] text-[${themes.stellar.colors.foreground}]`,
        bloom: `bg-[${themes.bloom.colors.background}] text-[${themes.bloom.colors.foreground}]`,
        minimalist: `bg-[${themes.minimalist.colors.background}] text-[${themes.minimalist.colors.foreground}]`,
      },
    },
    defaultVariants: {
      variant: "stellar",
    },
  }
);

export const sectionContainer = cva(
  "w-full max-w-7xl mx-auto flex flex-col justify-center px-6 md:px-10 transition-all duration-500",
  {
    variants: {
      size: {
        compact: "py-10",
        normal: "py-16",
        spacious: "py-28",
      },
      align: {
        start: "items-start text-left",
        center: "items-center text-center",
      },
    },
    defaultVariants: {
      size: "normal",
      align: "center",
    },
  }
);

export const showcase = cva(
  "rounded-2xl overflow-hidden relative group shadow-md hover:shadow-xl transition-all duration-500 backdrop-blur-sm",
  {
    variants: {
      variant: {
        stellar: [
          "bg-[#1F2833]/40 border border-[#45A29E]/30 hover:ring-2 hover:ring-[#66FCF1]/60",
          `text-[${themes.stellar.colors.foreground}]`,
        ].join(" "),
        bloom: [
          "bg-[#FFD1DC]/60 border border-[#FF6FB5]/40 hover:ring-2 hover:ring-[#FF89C0]/60",
          `text-[${themes.bloom.colors.foreground}]`,
        ].join(" "),
        minimalist: [
          "bg-white border border-gray-300 hover:ring-2 hover:ring-gray-500/50",
          `text-[${themes.minimalist.colors.foreground}]`,
        ].join(" "),
      },
    },
    defaultVariants: {
      variant: "stellar",
    },
  }
);

export const testimonialCard = cva(
  "rounded-xl p-6 text-left shadow-md border transition-all duration-500 hover:shadow-lg backdrop-blur-sm",
  {
    variants: {
      variant: {
        stellar: [
          "bg-[#1F2833]/50 border border-[#45A29E]/30 hover:ring-2 hover:ring-[#66FCF1]/50",
          `text-[${themes.stellar.colors.foreground}]`,
        ].join(" "),
        bloom: [
          "bg-[#FFF0F5]/80 border border-[#FF6FB5]/40 hover:ring-2 hover:ring-[#FF89C0]/50",
          `text-[${themes.bloom.colors.foreground}]`,
        ].join(" "),
        minimalist: [
          "bg-white/80 border border-gray-300 hover:ring-2 hover:ring-gray-500/40",
          `text-[${themes.minimalist.colors.foreground}]`,
        ].join(" "),
      },
    },
    defaultVariants: {
      variant: "stellar",
    },
  }
);
