const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0a192f",
          light:   "#112240",
          lighter: "#1d3461",
        },
        slate: {
          DEFAULT: "#8892b0",
          light:   "#a8b2d8",
          lighter: "#ccd6f6",
        },
        green: {
          DEFAULT: "#64ffda",
        },
        white: "#e6f1ff",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      transitionTimingFunction: {
        brittany: "cubic-bezier(0.645, 0.045, 0.355, 1)",
      },
    },
  },
};

export default config;
