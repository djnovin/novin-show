import express, { Request, Response } from 'express';

const app = express();
const port = 8001;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from proxy');
});

app.listen(port, () => {
  console.log(`proxy listening at http://localhost:${port}`);
});
