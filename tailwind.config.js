/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,jpeg}",
    
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        sidebar: "300px auto", // 👈 for sidebar layout. adds grid-cols-sidebar class
      }, 
      gridTemplateRows: {
        header: "64px auto", // 👈 for the navbar layout. adds grid-rows-header class
      },
    },
    colors: {
      'darkTokPed' : '#28282F',
      'green-tokopedia' : '#42b549',
      'white': 'rgb(255 255 255)',
      'black': '#000000',
      'grey': '#404040',
      'lightGrey': '#F8F8F8',
    },
   
  },
  plugins: [],
}

