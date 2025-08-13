/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
         // Folder styles
    'black-olive': '#3F3E3C',   // Base folder background
    'rusty-red': '#D82F3D',      // Folder icon color
    'columbia-blue': '#A7C6D9',  // Folder hover glow
    
    // Window backgrounds
    'black-olive': '#3F3E3C',    // Window background (dark desktop feel)
    
    // Accent
    'flax': '#E4C77E',           // Soft gold accent for highlights or borders
    'floral-white': '#F7F2E7',   // Text or content background inside windows

      }
    },
  },
  plugins: [],
}
