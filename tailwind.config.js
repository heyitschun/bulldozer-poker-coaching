module.exports = {
  future: {
     removeDeprecatedGapUtilities: true,
     purgeLayersByDefault: true,
  },
  purge: {
    enabled: false
  },
  theme: {
    extend: {
      colors: {
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
      }
    },
  },
  variants: {},
  plugins: [],
}
