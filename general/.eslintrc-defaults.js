module.exports = {
  "root": true,
  "extends": ["airbnb"],
  "ecmaFeatures": {
    "modules": true
  },
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "no-plusplus": "off",
    "default-case": "off",
    "consistent-return": "off",
    "class-methods-use-this": "off",
    "one-var": ["error", {
      initialized: "never"
    }],
    "one-var-declaration-per-line": ["error", "initializations"]
  }
};
