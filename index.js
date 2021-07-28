module.exports = {
  env: {
    browser: true,
    es2020: true,
    mocha: true,
  },
  plugins: ["vue"],
  extends: [
    "eslint-config-roboleary-base",
    "plugin:vue/recommended", // vue 2.x
    "prettier", // makes sure this is last in the list
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  ignorePatterns: ["**/node_modules/*", "**/dist/*", "**/out/*"],
};
