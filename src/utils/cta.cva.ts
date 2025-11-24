import { cva } from "class-variance-authority";

export const ctaVariants = {
  container: cva(
    "relative w-full overflow-hidden flex flex-col items-center justify-center py-32 px-6 md:px-12 text-center transition-colors duration-700 ease-out",
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

  title: cva(
    "text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-md",
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

  subtitle: cva(
    "text-lg md:text-xl font-medium opacity-90 mb-10 leading-relaxed max-w-3xl mx-auto",
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

  button: cva(
    "relative inline-block px-10 py-4 font-semibold rounded-full shadow-lg transition-all duration-500",
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
};
