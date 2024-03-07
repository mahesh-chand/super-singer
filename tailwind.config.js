/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '540px', // min-width
        'xxxs': '375', //min-width
      },
      fontFamily: {
        'font-sans': 'font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        'font-serif': 'font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
        'font-mono': 'font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      }
    },
  },
  plugins: [],
}