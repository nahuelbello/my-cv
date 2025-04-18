/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',   // incluye tu carpeta de estilos
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['var(--font-title)', 'sans-serif'],
        body : ['var(--font-body)',  'sans-serif'],
        /* opcional: redefine font‑sans para no romper clases existentes */
        sans : ['var(--font-body)',  'system-ui'],
      },
    },
  },
  plugins: [],
}