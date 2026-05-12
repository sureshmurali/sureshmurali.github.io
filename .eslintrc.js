module.exports = {
    "env": {
    "node": true, 
    "browser": true,
    "es6": true
    },
    "parserOptions": {
    "ecmaVersion": 2022,
    "sourceType": "module",
    "ecmaFeatures": { "jsx": true }
    },
    "rules": {
    "react/jsx-filename-extension": "off",
    "react/prefer-stateless-function": "off",
    "global-require": "off",
    "no-console": "off",
    "react/forbid-prop-types": "off",
    "no-param-reassign": "off",
    "consistent-return": "off",
    "react/no-unused-state": "off"
    },
    "extends": "airbnb"
    };