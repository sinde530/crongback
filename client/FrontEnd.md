# React-TypeScript

git add .
git commit -m "[client]: "
git push origin typescript

## Install
> yarn create react-app my-app --template typescript
> yarn add typescript @types/node @types/react @types/react-dom @types/jest
> yarn add redux react-redux @types/react-redux
> yarn create @eslint/config
> yarn add -D eslint-config-airbnb-typescript
> yarn add react-router-dom
> yarn @emotion/styled @emotion/react

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

## * .prettierrc File Create
```rc
{
	"tabWidth": 2
}

```

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
        "airbnb-typescript",
        "plugin:prettier/recommended"
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
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/default-param-last": 0,
        "react/button-has-type": "off"
    }
}
```

## BrowserRouter Write

```typescript
src/index.tsx

import { BrowserRouter } from 'react-router-dom';

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
```

## Rotuer Write
```typescript
import { Route, Routes } from 'react-router-dom';

import Login from './components/LogIn';
import SingUp from './components/SingUp';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/singup" element={<SingUp />} />
      </Routes>
    </div>
  );
}

export default App;

```