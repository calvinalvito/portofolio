/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ["./**/*.{html,js}"],
  theme: {
    container:{
      center:true,
      padding:'20px',
    },
    extend: {
      colors:{
        primary: '#079211',
        dark: '#0f172a',
        darkmode: '#121212',
        darkmodesecondary: '#000000',
        black10:'#F3F3F3',
        black30:'#DADADA',
        black50:'#979797',
        black70:'#5B5B5B',
        black90:'#1C1C1C',
        green10:'#0CF31C',
        green30:'#09C317',
        green50:'#079211',
        green70:'#05610B',
        green90:'#023106',
        lime:'#C7EF13',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

