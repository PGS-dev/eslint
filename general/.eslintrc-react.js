module.exports = {
  "extends": ["./.eslintrc-defaults.js"],
  "plugins": [
    "react"
  ],
  "parser": "babel-eslint",
  "rules": {
    "react/require-default-props": "off",
    "react/jsx-filename-extension": ["error", {
      extensions: [".js"]
    }],
    "react/jsx-tag-spacing": ["error", {
      closingSlash: "never",
      beforeSelfClosing: "allow",
      afterOpening: "never"
    }],
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": ["warn", { "aspects": ["invalidHref"] }]
  }
};
