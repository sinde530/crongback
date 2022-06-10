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
