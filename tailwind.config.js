/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,tsx,jsx,vue}'
  ],
  corePlugins: {
    preflight: false,
  },
    theme: {
      extend: {},
    },
    plugins: [],
  }
