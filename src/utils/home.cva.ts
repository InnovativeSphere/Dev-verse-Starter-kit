import { cva } from "class-variance-authority";

export const homeContainer = cva(
  "relative flex flex-col items-center justify-center overflow-hidden min-h-screen transition-colors duration-500 font-sans",
  {
    variants: {
      variant: {
        helio: "",
        equinox: "",
        glacia: "",
        flora: "",
        mono: "",
      },
    },
    defaultVariants: {
      variant: "helio",
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
        helio: "",
        equinox: "",
        glacia: "",
        flora: "",
        mono: "",
      },
    },
    defaultVariants: {
      variant: "helio",
    },
  }
);

export const testimonialCard = cva(
  "rounded-xl p-6 text-left shadow-md border transition-all duration-500 hover:shadow-lg backdrop-blur-sm",
  {
    variants: {
      variant: {
        helio: "",
        equinox: "",
        glacia: "",
        flora: "",
        mono: "",
      },
    },
    defaultVariants: {
      variant: "helio",
    },
  }
);
