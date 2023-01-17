/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
            'poppins': ['Poppins']
        },
        colors: {
            'dark': '#393E46',
            'primary': '#0081C9'
        },
        backgroundColor: {
            "primary": '#0081C9'
        }
      },
    },
    plugins: [],
    darkMode: "class"
  }