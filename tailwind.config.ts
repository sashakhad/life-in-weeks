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
            "hometown": "#8eb2d6",           // Light blue
            "college-town": "#FCC737",       // Golden yellow
            "paris": "#9B59B6",              // Purple (romantic)
            "new-york": "#FF6B6B",           // Red (energy)
            "san-francisco": "#FF8C00",      // Orange (tech/innovation)
            "big-city": "#118B50",           // Green
            "small-town": "#469046",         // Dark green
            "metro-area": "#3498DB",         // Bright blue
          },
          "stages": {
            "i-was-tiny": "#FFF0F5",         // Lavender blush (soft pink)
            "kindergartner": "#FFE4B5",      // Moccasin (warm yellow)
            "student": "#E0F6FF",            // Light cyan (learning blue)
            "high-school-student": "#C9E9D2", // Light green (growth)
            "college-student": "#FFE4E1",    // Misty rose (exploration)
            "graduate": "#DDA0DD",           // Plum (transition)
            "funemployed": "#F0F8FF",        // Alice blue (freedom)
            "working": "#E6E6FA",            // Lavender (professional)
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
