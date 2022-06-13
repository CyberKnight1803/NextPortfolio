module.exports = {
  content: [
    "./pages/**/*.{js, jsx, ts, tsx}", 
    "./components/**/*.{js, jsx, ts, tsx}"
  ],
  theme: {
    screens: { 
      'tablet': '640px', 
      'laptop': '1024px', 
    },
    extend: {
      fontFamily: {
        roboto: "'Roboto Mono'",
        dm_mono: "'DM Mono'", 
        archia_bold: "'archia-bold'", 
        archia: "'archia'", 
        archiasemibold: "'archia_semibold'", 
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif'
        ],
      }, 
      colors: {
        'dark': '#02070a'
      }
    },
  },
  plugins: [],
}