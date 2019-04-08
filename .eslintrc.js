module.exports = {
    "extends": "airbnb",
    "plugins": ["import"],
    "settings": {
        "import/resolver": {
            "webpack": {
                "config": "webpack.config.js"
            }
        }
    },
    "rules": {
        "react/forbid-prop-types": 0,
        "import/no-named-as-default": "off",
        "comma-dangle": ["error", "never"],
        "no-param-reassign": [2, {"props": false}],
        "indent": [2, 2, {"SwitchCase": 1}],
        "quotes": [2, "single"],
        "react/jsx-filename-extension": [1, {"extensions": [".js", ".jsx"]}],
        "semi": [2, "always"],
        "no-console": "warn",
        "global-require": 0,
        "react/jsx-no-bind": [2, {
            "allowBind": true,
            "ignoreRefs": false,
            "allowArrowFunctions": true
        }],
        "jsx-a11y/label-has-for": "off",
         "jsx-a11y/label-has-associated-control": "off",
        "linebreak-style": ["error", /^win/.test(process.platform) ? "windows" : "unix"],
        "react/destructuring-assignment": [true, "never"],
        "prefer-destructuring": ["error", {"object": false, "array": false}],
        "react/jsx-one-expression-per-line": [true, { "allow": "literal" }]
    },
    "env": {
        "es6": true,
        "node": true,
        "browser": true,
        "jest": true
    },
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      }
    },
    "parser": "babel-eslint"
}