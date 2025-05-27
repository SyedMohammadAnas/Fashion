/**
 * Tailwind CSS Configuration File
 * Custom font families: Merriweather, Bebas Neue
 * Add more customizations as needed
 */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Scan all relevant files for Tailwind classes
    './src/app/globals.css',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Add Merriweather and Bebas Neue to Tailwind
        merriweather: ['var(--font-merriweather)', 'serif'],
        bebas: ['var(--font-bebas-neue)', 'cursive'],
      },
    },
  },
  plugins: [],
};
