import tailwindcss from "@headlessui/tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const newLocal = {};
export default {
  // Change this with the extensions you are going to use.
  content: [
    "./src/**/*.{html,js,jsx,md,mdx,svelte,ts,tsx,vue,svg}",
    "./src/**/**/*.{html,js,jsx,md,mdx,svelte,ts,tsx,vue,svg}"
  ],
  theme: {
    screens: {
      // These are the default media queries.
      // We're declaring them to make it easier to import and use in react for js checks
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "rotate-loader": {
          from: { transform: "rotate(0turn)" },
          to: { transform: "rotate(1turn)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "rotate-loader": "rotate-loader 1s ease-in-out infinite"
      },
    },
  },
  plugins: [typography, forms, tailwindcss, animate],
} satisfies Config;
