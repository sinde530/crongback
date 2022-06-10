# TypeScript And Node.js + EnvironMent Local Settings

## TypeScript
MS에서 개발하고 관리하는 오픈소스 프로그래밍 언어이다.

자바스크립트 기반으로 변수의 데이터 타입을 지정하여 에측 가능한 코딩이 가능하게 만듬.

TypeScript File(.ts)는 브라우저에서 동작하지 않으므로 TypeScript Compiler(tsc)를 이용해 자바스크립트 파일로 변환해야 한다.

## 🪴 Node.js + Express + TypeScript Settigs

## 1.package.json create.
> yarn init

## 2.Library install.

express, typescrip, ts-node, nodemon install.
> yarn add -D express typescript ts-node nodemon @types/node @types/express

- nodemon: 서버 코드를 변경 할 때마다 서버를 재시작하지 않고 자동으로 대신 해준다.
- ts-node: Node.js 상에서 TypeScript Compiler를 통하지 않고도, 직접 TypeScript를 실행시키는 역활을 한다.

## 3.tsconfig.json file create.
TypeScript로 만들으니 tsc 명령어를 사용하여 만듬
> yarn tsc --init

이후 tsconfig.json 이 만들어진걸 볼수있음.
```typescript
{
  "compilerOptions": {
    "target": "es6", // 어떤 버전으로 컴파일할지 작성 
    "module": "commonjs", //어떤 모듈 방식으로 컴파일할지 설정
    "outDir": "./dist",	//컴파일 후 js 파일들이 생성되는 곳
    "rootDir": ".",	//루트 폴더
    "strict": true,	//strict 옵션 활성화
    "moduleResolution": "node",	//모듈 해석 방법 설정: 'node' (Node.js)
    "esModuleInterop": true,
     "jsx": "react"
  }
}
```

본인은 이렇게 세팅을 하였음.

- esModuleInterop 속성이 true로 설정될 경우, ES6 모듈 사양을 준수하여 CommonJS모듈을 가져올수 있게 된다.

## 4.Express Write.
root folder아래 src/index.ts를 작성해준다.
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
script 추가해주기

```typescript
"scripts": {
    "start": "node dist/app.js", 
    "build": "tsc -p .", 
    "dev": "nodemon --watch \"src/**/*.ts\" --exec \"ts-node\" src/app.ts"
  }
```

## 6.Server Start
> $ yarn dev


