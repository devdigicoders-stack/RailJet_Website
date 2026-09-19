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
        railjet: {
          charcoal: {
            DEFAULT: "#24282C",
            dark: "#191C1E",
            deep: "#111417",
            light: "#33373B",
            surface: "#3D4248",
          },
          orange: {
            DEFAULT: "#EA580C",
            hover: "#D94E06",
            light: "#F97316",
            vibrant: "#F25A22",
            container: "#FFECE5",
            onContainer: "#4E1500",
          },
          silver: {
            DEFAULT: "#F1F5F9",
            light: "#F8FAFC",
            border: "#E2E8F0",
            muted: "#64748B",
          },
        },
        m3: {
          primary: {
            DEFAULT: "#EA580C",
            dark: "#C2410C",
            light: "#FB923C",
            container: "#FFECE5",
            onContainer: "#4E1500",
          },
          secondary: {
            DEFAULT: "#24282C",
            container: "#33373B",
            onContainer: "#FFFFFF",
          },
          tertiary: {
            DEFAULT: "#0F766E",
            container: "#CCFBF1",
            onContainer: "#042F2E",
          },
          surface: {
            DEFAULT: "#FFFFFF",
            dim: "#F1F5F9",
            bright: "#FFFFFF",
            containerLowest: "#FFFFFF",
            containerLow: "#F8FAFC",
            container: "#F1F5F9",
            containerHigh: "#E2E8F0",
            containerHighest: "#CBD5E1",
            variant: "#E2E8F0",
          },
          outline: {
            DEFAULT: "#94A3B8",
            variant: "#CBD5E1",
          },
          onSurface: {
            DEFAULT: "#191C1E",
            variant: "#475569",
          },
        },
      },
      borderRadius: {
        "m3-xs": "4px",
        "m3-sm": "8px",
        "m3-md": "12px",
        "m3-lg": "16px",
        "m3-xl": "28px",
        "m3-full": "9999px",
      },
      boxShadow: {
        "m3-1": "0px 1px 3px 1px rgba(0, 0, 0, 0.12), 0px 1px 2px 0px rgba(0, 0, 0, 0.24)",
        "m3-2": "0px 2px 6px 2px rgba(0, 0, 0, 0.12), 0px 1px 2px 0px rgba(0, 0, 0, 0.24)",
        "m3-3": "0px 4px 8px 3px rgba(234, 88, 12, 0.15), 0px 1px 3px 0px rgba(0, 0, 0, 0.20)",
        "m3-4": "0px 6px 14px 4px rgba(234, 88, 12, 0.18), 0px 2px 4px 0px rgba(0, 0, 0, 0.20)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "charcoal-gradient": "linear-gradient(135deg, #191C1E 0%, #24282C 50%, #33373B 100%)",
        "jet-orange-gradient": "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
