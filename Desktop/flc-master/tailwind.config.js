/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
 
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        gothamBold:"gothamBold",
        gothamBook:"gothamBook",
        gothamMedium:"gothamMedium"
      },
      screens: {
        'sm': '640px',      // Small screens (mobile)
        'md': '768px',      // Medium screens (tablet)
        'lg': '1024px',     // Large screens (desktop)
        'xl': '1280px', 
        'xln':'1366px',
        'xnl':'1480px',
        'xll':'1620px',
        'xxl':'1920px'    // Extra large screens (wide desktop)
      },
    },
  },
 
 
}



