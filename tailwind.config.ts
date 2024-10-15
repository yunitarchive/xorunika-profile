import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#243642', // Set as primary color
        secondary: '#387478', // Set as secondary color
        lightTeal: '#629584', // Use this for lighter elements
        lightGreen: '#E2F1E7', // Background 
      },
    },
  },
  plugins: [],
};
export default config;
