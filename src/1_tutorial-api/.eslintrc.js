module.exports = {
  root: true,
  env: {
    es2020: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "prettier/standard",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    project: "./tsconfig.eslint.json",
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint", "import", "prettier"],
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        argsIgnorePattern: "_",
        ignoreRestSiblings: false,
        varsIgnorePattern: "_",
      },
    ],
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/ban-ts-comment": "off",
    "lines-between-class-members": [
      "error",
      "always",
      {
        exceptAfterSingleLine: true,
      },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      { js: "never", jsx: "never", ts: "never", tsx: "never" },
    ],
    "import/prefer-default-export": "off",
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "*",
        next: "return",
      },
    ],
    "prefer-template": ["error"],
    "no-use-before-define": "off",
    "no-void": "off",
  },
  overrides: [],
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
};
