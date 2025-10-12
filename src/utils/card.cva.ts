import { cva } from "class-variance-authority";
import { themes } from "../Styles/themes";

export const cardVariants = cva(
  "relative w-full rounded-xl transition-all overflow-hidden shadow-lg backdrop-blur-md flex flex-col justify-between",
  {
    variants: {
      variant: {
        stellar: `
          bg-[${themes.stellar.colors.background}]
          text-[${themes.stellar.colors.foreground}]
          [--card-accent:${themes.stellar.colors.accent}]
        `,
        bloom: `
          bg-[${themes.bloom.colors.background}]
          text-[#4A1D3D] /* slightly deeper rose for readability */
          [--card-accent:${themes.bloom.colors.accent}]
        `,
        minimalist: `
          bg-[${themes.minimalist.colors.background}]
          text-[#1F2937] /* gray-800 for proper contrast */
          [--card-accent:${themes.minimalist.colors.accent}]
        `,
      },
      size: {
        sm: "p-4",
        md: "p-5",
        lg: "p-6",
      },
    },
    defaultVariants: {
      variant: "stellar",
      size: "sm",
    },
  }
);
