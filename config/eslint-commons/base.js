// eslint-disable-next-line no-undef
module.exports = {
  extends: [
    "next",
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
  ],
  globals: {
    React: true,
    google: true,
    mount: true,
    mountWithRouter: true,
    shallow: true,
    shallowWithRouter: true,
    context: true,
    expect: true,
    jsdom: true,
    JSX: true,
    jest: true,
  },
  env: {
    jest: true,
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "no-console": "error",
    "@next/next/no-html-link-for-pages": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
