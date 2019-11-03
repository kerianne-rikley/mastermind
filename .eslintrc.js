module.exports = {
  extends: ["airbnb", "prettier"],
  plugins: ["prettier"],
  parser: "babel-eslint",
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true
  },
  rules: {
    "no-use-before-define": "off",
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
    "comma-dangle": "off",
    "react/prefer-stateless-function": "off",
    "react/destructuring-assignment": "off"
  },
  globals: {
    fetch: false
  }
};
