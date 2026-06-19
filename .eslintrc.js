module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    "react-app",
    "react-app/jest",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["unused-imports"],
  rules: {
    // Unused imports — warn + auto-fixable
    "unused-imports/no-unused-imports": "warn",
    "unused-imports/no-unused-vars": [
      "warn",
      { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" },
    ],

    // Disable base rules in favour of TS/unused-imports rules
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",

    // Console — allow warn & error only
    "no-console": ["warn", { allow: ["warn", "error"] }],

    // Relax for gradual TS migration
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/ban-ts-comment": "off",

    // React
    "react/prop-types": "off",
    "react/display-name": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    // Testing — relax rules that conflict with our smoke-test pattern
    "jest/no-conditional-expect": "off",
    "testing-library/prefer-screen-queries": "warn",
    "testing-library/no-unnecessary-act": "warn",
    "testing-library/no-wait-for-multiple-assertions": "warn",
  },
  ignorePatterns: [
    "node_modules/",
    "build/",
    "src/assests/font-awesome/",
    "scripts/",
  ],
};
