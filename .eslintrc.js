module.exports = {
  env: {
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 'es2015', // Allows for the parsing of modern ECMAScript features
    sourceType: "module" // Allows for the use of imports
  },
  extends: [
    "plugin:@typescript-eslint/recommended" // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  ],
}