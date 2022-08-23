const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.tsx',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        // General
        primary: colors.amber[300],
        secondary: colors.slate[900],
        links: {
          txt: colors.purple[500],
          hover_txt: colors.purple[700],
        },
        loading_spinner: colors.blue[500],
        popups: { //change this later
          bg: colors.slate[900],
          txt: colors.yellow[400],
          internal_border: colors.slate[200],
        },
        warning: {
          txt: colors.slate[800],
          bg: colors.yellow[400],
          border: colors.yellow[500],
        },
        error: {
          txt: colors.red[700],
          bg: colors.red[50],
          border: colors.red[900],
        },

        // Inputs
        btn: {
          txt: colors.neutral[50],
          bg: colors.transparent,
          border: colors.neutral[50],
          hover_txt: colors.amber[300],
          hover_bg: colors.slate[900],
          hover_border: colors.amber[300],
        },
        btn_error: {
          txt: colors.white,
          bg: colors.red[500],
          border: colors.red[500],
          hover_txt: colors.white,
          hover_bg: colors.red[600],
          hover_border: colors.red[600],
        },
        label: colors.amber[300],
        txt_input: {
          txt: colors.white,
          bg: colors.slate[900],
          border: colors.slate[200],
          focus_txt: colors.white,
          focus_bg: colors.slate[900],
          focus_border: colors.indigo[300],
          placeholder_txt: colors.indigo[600],
        },
        
        // Whitelist proof widget
        wl_message: {
          txt: colors.slate[800],
          bg: colors.indigo[100],
        },

        // Mint widget
        token_preview: colors.amber[100],
      },
      fontFamily: {
        sans: ['Requiem']
      },
      screens: {
        '3xl': '2560px',
      },
    },
  },
  variants: {},
  plugins: [],
};
