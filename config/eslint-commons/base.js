// eslint-disable-next-line no-undef
module.exports = {
  extends: ["eslint:recommended", "next", "next/core-web-vitals"],
  globals: {
    React: "true",
    google: "true",
    mount: "true",
    mountWithRouter: "true",
    shallow: "true",
    shallowWithRouter: "true",
    context: "true",
    expect: "true",
    jsdom: "true",
    JSX: "true",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "no-console": "error",
    "@next/next/no-html-link-for-pages": "off",
  },
};
