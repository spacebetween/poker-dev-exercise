module.exports = {
  extends: ["airbnb-base", "prettier"],
  plugins: ["jest"],
  rules: {
    "no-console": "off",
    "no-prototype-builtins": "off",
    "no-underscore-dangle": "off"
  },
  env: {
    "jest/globals": true
  }
};
