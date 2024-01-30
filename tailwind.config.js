/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {'background':"('./src/assets/bg-image.jpg')"}
    },
    fontFamily: {
      customFont1:['Inter','sans-serif'],
      customFont2:['Poppins','sans-seri']
    }
  },
  plugins: [],
}

