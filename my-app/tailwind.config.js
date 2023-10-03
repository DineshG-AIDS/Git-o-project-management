const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Custom", "sans"],
        custom1: ["Custom1", "sans"],
        custom2: ["Custom2", "sans"],
        custom3: ["Custom3", "sans"],
        custom5: ["Custom5", "sans"],
        custom6: ["Custom6", "sans"],
        custom7: ["Custom7", "sans"],
      },
    },
    letterSpacing: {
      "extra-wide": "0.3em",
    },
  },
  plugins: [],
});
