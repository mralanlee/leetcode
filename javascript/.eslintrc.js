module.exports = {
  "plugins": [
    "prettier"
  ],
  "extends": [
    "airbnb-base",
    "prettier",
  ],
  "rules": {
    "no-console": "off",
    "import/no-extraneous-dependencies": "off", // for use with ava
    "strict": "off", // since we're using commonjs normaly and modules in ava
    "prettier/prettier": ["error", { "singleQuote": true, "trailingComma": "es5" }],
  }
};
