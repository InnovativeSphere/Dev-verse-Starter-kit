import { cva } from "class-variance-authority";

export const footerVariants = {
  container: cva(
    "relative w-full py-12 px-6 md:px-12 transition-colors duration-700 flex flex-col items-center justify-center",
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
  ),

  brand: cva("text-xl md:text-2xl font-bold mb-2", {
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
  }),

  copyright: cva("text-sm opacity-80 mb-4", {
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
  }),

  socials: cva("flex gap-4 mt-2", {
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
  }),
};
