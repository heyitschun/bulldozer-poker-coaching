const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
     removeDeprecatedGapUtilities: true,
     purgeLayersByDefault: true
  },
  purge: {
    enabled: false
  },
  theme: {
    extend: {
      colors: {
        "cyan": "#00c6e5",
        navy: {
          "100": "#4c6a88",
          "200": "#325576",
          "300": "#194066",
          "400": "#002b55",
          "500": "#00264c",
          "600": "#002244",
          "700": "#001e3b",
          "800": "#001933",
          "900": "#00152a",
        },
        gray: {
          "100": "#e5f4f7",
          "200": "#cedbde",
          "300": "#b7c3c5",
          "400": "#a0aaac",
          "500": "#899294",
          "600": "#727a7b",
          "700": "#44494a",
          "800": "#2d3031",
          "900": "#161818"
        }
      },
      height: {
        xl: "24rem",
        xxl: "32rem"
      },
      inset: {
        "1/2": "50%",
        "1/3": "33%"
      },
      fontFamily: {
        oxygen: ["Oxygen", ...defaultTheme.fontFamily.sans],
        sans: ["Ubuntu", ...defaultTheme.fontFamily.sans],
        ubuntuc: ["Ubuntu Condensed", ...defaultTheme.fontFamily.sans]
      },
      opacity: {
        "80": "0.8",
        "90": "0.9"
      }
    }
  },
  variants: {},
  plugins: []
}
