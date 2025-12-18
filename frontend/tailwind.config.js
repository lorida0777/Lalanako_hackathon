/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', "serif"], // Pour les titres majestueux
        sans: ["Inter", "sans-serif"], // Corps de texte clair
      },
      colors: {
        primary: {
          DEFAULT: "#b91c1c", // Rouge drapeau malgache
          dark: "#991b1b",
          light: "#dc2626",
        },
        accent: "#ffffff", // Blanc du drapeau
        neutral: {
          50: "#f9fafb",
          100: "#f3f4f6",
          800: "#1f2937",
          900: "#111827",
        },
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
      },
      boxShadow: {
        soft: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
