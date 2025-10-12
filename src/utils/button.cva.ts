import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-md shadow-sm select-none relative overflow-hidden",
  {
    variants: {
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
      variant: {
        stellar: `
          bg-[#45A29E]
          text-[#E8E8E8]
          hover:bg-[#66FCF1]
          focus:ring-[#66FCF1]
          shadow-[0_0_10px_rgba(102,252,241,0.4)]
          hover:shadow-[0_0_20px_rgba(102,252,241,0.6)]
        `,
        bloom: `
          bg-[#FF6FB5]
          text-[#FFFFFF]
          hover:bg-[#FF89C0]
          focus:ring-[#FF6FB5]
          shadow-[0_0_10px_rgba(255,111,181,0.4)]
          hover:shadow-[0_0_20px_rgba(255,111,181,0.6)]
        `,
        minimalist: `
          bg-[#2D2D2D]
          text-[#FFFFFF]
          hover:bg-[#3F3F3F]
          focus:ring-[#666666]
          shadow-[0_0_10px_rgba(0,0,0,0.25)]
          hover:shadow-[0_0_20px_rgba(0,0,0,0.4)]
        `,
      },
    },
    defaultVariants: {
      size: "md",
      variant: "stellar",
    },
  }
);
