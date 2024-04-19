import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    rules: {
      "no-console": 0,
      "import/extensions": 0,
      "no-unused-vars": "warn",
      "no-undef": "warn",
    }
  }
];