import cors from 'cors';
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5050;
const app: Express = express();

app.use(cors());
app.use(express.json());

console.log("TEST")

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
  });  

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

//https://blog.logrocket.com/how-to-set-up-node-typescript-express/