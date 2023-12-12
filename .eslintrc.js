module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks",
        "@typescript-eslint"
    ],
    "rules": {
        "quotes": [
            "error",
            "single",
            {
                "allowTemplateLiterals": true,
                "avoidEscape": true
            }
        ],
        "max-classes-per-file": ["off"],
        "jsx-quotes": ["error", "prefer-double"],
        "comma-dangle": ["error", "never"],
        "@typescript-eslint/explicit-module-boundary-types": ["off"],
        "@typescript-eslint/interface-name-prefix": ["off"],
        "@typescript-eslint/no-explicit-any": ["off"],
        "@typescript-eslint/no-namespace": ["error", { "allowDeclarations": true }],
        "@typescript-eslint/no-non-null-assertion": ["off"],
        "@typescript-eslint/no-unused-vars": ["warn", { "ignoreRestSiblings": true }],
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "react/display-name": "off",
        "react-hooks/rules-of-hooks": "error",
        "space-before-function-paren": ["error", "never"],
        "@typescript-eslint/object-curly-spacing": ["error", "never"],
    }
}
