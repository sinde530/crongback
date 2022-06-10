# 1.package.json create.

> yarn init

## 2.Library install.

```typescript
yarn add -D express typescript ts-node nodemon @types/node @types/express
yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-prettier prettier
```

## 3.tsconfig.json file create.

> yarn tsc -init

```typescript
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": ".",
    "strict": true,
    "moduleResolution": "node",
    "esModuleInterop": true,
     "jsx": "react"
  }
}
```

## 4.Express Write.
```typescript
import express, { Request, Response, NextFunction } from 'express';

const app = express();

app.get('/welcome', (req: Request, res: Response, next: NextFunction) => {
  res.send('welcome!');
});

app.listen('1234', () => {
  console.log(`
  ################################################
  🛡️  Server listening on port: http://localhost:1234 🛡️
  🛡️  welcome listening on port: http://localhost:1234/welcome 🛡️
  ################################################
`);
});
```

## 5.packages.json file modify

Create `Script`

```typescript
"scripts": {
    "start": "node dist/app.js",
    "build": "tsc -p .",
    "dev": "nodemon --watch \"src/**/*.ts\" --exec \"ts-node\" src/app.ts"
    }
```

## 6.Server Start

> $ yarn dev