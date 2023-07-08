/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
      'jaldi': ['Jaldi', 'sans-serif'],
    },

    extend: {

      colors: {
        'bgPrimary': '#131313',
        'bgSecondary': '#191919',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },


  plugins: [
    require("daisyui"),
  ],
}
