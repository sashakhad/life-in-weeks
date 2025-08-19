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
            "hometown": "#4169E1",           // Royal blue (strong)
            "college-town": "#FF8C00",       // Dark orange (vibrant)
            "paris": "#8A2BE2",              // Blue violet (romantic)
            "new-york": "#DC143C",           // Crimson (energy)
            "san-francisco": "#FF4500",      // Orange red (tech/innovation)
            "big-city": "#228B22",           // Forest green (strong)
            "small-town": "#32CD32",         // Lime green (distinct)
            "metro-area": "#1E90FF",         // Dodger blue (bright)
          },
          "stages": {
            "i-was-tiny": "#FFB6C1",         // Light pink (baby)
            "kindergartner": "#FFD700",      // Gold (bright learning)
            "student": "#87CEEB",            // Sky blue (knowledge)
            "high-school-student": "#90EE90", // Light green (growth)
            "college-student": "#FFA07A",    // Light salmon (exploration)
            "graduate": "#DA70D6",           // Orchid (achievement)
            "funemployed": "#87CEFA",        // Light sky blue (freedom)
            "working": "#DDA0DD",            // Plum (professional)
            "freelancing": "#F0E68C",        // Khaki (independence)
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
