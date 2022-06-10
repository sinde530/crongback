# React-TypeScript

git add .
git commit -m "[client]: yarn add -D eslint-config-airbnb-typescript"
git push origin typescript

## Install
> yarn create react-app my-app --template typescript
> yarn add typescript @types/node @types/react @types/react-dom @types/jest
> yarn add redux react-redux @types/react-redux
> yarn create @eslint/config
> yarn add -D eslint-config-airbnb-typescript

## * eslint.json modify
```json
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "airbnb-typescript"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off"
    },
		"ignorePatterns": [
        "vite.config.ts"
    ]
}
```