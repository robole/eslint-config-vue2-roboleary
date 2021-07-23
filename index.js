module.exports = {
  env: {
    browser: true,
    es2020: true,
    mocha: true,
  },
  plugins: ["vue"],
  extends: [
    "airbnb-base",
    "plugin:vue/recommended", // vue 2.x
    "prettier", // makes sure this is last in the list
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  ignorePatterns: ["**/node_modules/*", "**/dist/*", "**/out/*"],
  rules: {
    "no-unused-vars": "warn",
    "no-console": "off",
    "func-names": "off",
    "no-use-before-define": "off",
    "prefer-const": "off",
    radix: "off",
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "vue/max-attributes-per-line": 0, //inteferes with prettier
  },
};
