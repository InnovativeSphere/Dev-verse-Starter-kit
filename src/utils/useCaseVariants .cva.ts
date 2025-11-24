import { cva } from "class-variance-authority";

export const useCaseVariants = cva(
  "relative w-full transition-colors duration-700",
  {
    variants: {
      variant: {
        helio: "",
        equinox: "",
        glacia: "",
        flora: "",
        mono: "",
      },
      layout: {
        grid: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
        list: "flex flex-col gap-6",
      },
      card: {
        default: "rounded-2xl p-5 shadow-lg bg-white dark:bg-neutral-800 flex flex-col items-center text-center",
        elevated: "rounded-3xl p-6 shadow-2xl bg-white dark:bg-neutral-800 flex flex-col items-center text-center",
      },
    },
    defaultVariants: {
      variant: "helio",
      layout: "grid",
      card: "default",
    },
  }
);
