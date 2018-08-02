const OFF = 0;
const ON = "error";

module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb", "prettier", "prettier/react"],
  plugins: ["react", "prettier"],
  env: {
    es6: true,
    browser: true,
    node: true
  },
  rules: {
    "class-methods-use-this": OFF,
    "import/no-extraneous-dependencies": [
      ON,
      { devDependencies: ["server/**/*.js", "tools/**/*.js", "**/*.spec.js"] }
    ],
    "import/prefer-default-export": OFF,
    "prettier/prettier": ON,
    "react/jsx-filename-extension": [ON, { extensions: [".js"] }]
  }
};
