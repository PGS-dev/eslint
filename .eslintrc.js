const baseRules = {
  'no-plusplus': 'off',
  'default-case': 'off',
  'consistent-return': 'off',
  'class-methods-use-this': 'off',
  'one-var': ['error', {
    initialized: 'never'
  }],
  'one-var-declaration-per-line': ['error', 'initializations']
};

const reactRules = {
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
};

module.exports = {
  "root": true,
  "extends": ["airbnb"],
  "plugins": [
    "react"
  ],
  "ecmaFeatures": {
    "modules": true
  },
  "rules": Object.assign({},
    baseRules,
    reactRules
  )
};