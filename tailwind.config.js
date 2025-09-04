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
        primary: 'hsl(195, 60%, 50%)',
        accent: 'hsl(30, 90%, 55%)',
        surface: 'hsl(0, 0%, 100%)',
        background: 'hsl(210, 30%, 95%)',
        'text-primary': 'hsl(210, 30%, 20%)',
        'text-secondary': 'hsl(210, 30%, 40%)',
        'dark-bg': 'hsl(225, 45%, 12%)',
        'dark-surface': 'hsl(225, 35%, 18%)',
        'dark-accent': 'hsl(270, 70%, 65%)',
      },
      borderRadius: {
        'sm': '6px',
        'md': '10px',
        'lg': '16px',
      },
      spacing: {
        'sm': '8px',
        'md': '12px',
        'lg': '20px',
      },
      boxShadow: {
        'card': '0 4px 12px hsla(210, 30%, 20%, 0.08)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
