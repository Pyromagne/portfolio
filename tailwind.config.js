/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-bell': {
          '50': '#f3f6fa',
          '100': '#e9edf6',
          '200': '#d7deee',
          '300': '#bec8e3',
          '400': '#a4acd5',
          '500': '#959bcc',
          '600': '#7476b7',
          '700': '#6262a0',
          '800': '#515282',
          '900': '#464869',
          '950': '#292a3d',
        },
      },
    },
  },
  plugins: [],
}