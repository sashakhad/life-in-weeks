import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "life-in-weeks": {
          "cream": "#fff7e9",
          "blue": "#3f5c72",
          "orange": "#f05d2b",
          "locations": {
            "hometown": "#8eb2d6",
            "college-town": "#FCC737",
            "big-city": "#118B50",
            "small-town": "#469046",
            "metro-area": "#FF6B6B",
          },
          "stages": {
            "i-was-tiny": "#ffffff",
            "kindergartner": "#FFF6DA",
            "student": "#E8F9FF",
            "high-school-student": "#C9E9D2",
            "college-student": "#FFE3E3",
            "working": "#F8E7F6",
            "freelancing": "#d6d6f0",
            "funemployed": "#ffffff",
            "graduate": "#E0E0E0",
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
