# 1.package.json create.

> yarn init

## 2.Library install.

```typescript
yarn add -D express nodemon @types/node @types/express
yarn add @types/body-parser @types/config @types/cors @types/yup @types/pino @types/mongoose @types/bcrypt @types/jsonwebtoken @types/lodash @types/nanoid ts-node typescript -D
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

## 6.Create Folder nodemon.json
```typescript
{
    "restartable": "rs",
    "ignore": [".git", "node_modules/", "dist/", "coverage/"],
    "watch": ["src/"],
    "execMap": {
      "ts": "node -r ts-node/register"
    },
    "env": {
      "NODE_ENV": "development"
    },
    "ext": "js,json,ts"
}

```
