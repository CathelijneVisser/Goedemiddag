module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./app.vue",
      "./error.vue",
    ],
    theme: {
      colors: {
        'red': 'rgb(255 107 115)',
        'green': 'rgb(166 237 181)',
        'blue': 'rgba(59 130 246)',
        'geel': 'rgb(229 217 171)',
      },
      fontSize: {
        sm: '0.8rem',
        base: '1.4rem',
        xl: '2rem'
      }
    },
    plugins: [],
  }