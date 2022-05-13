import 'dotenv/config';
import express, { Request, Response } from 'express';
import cors from 'cors';
import { router } from './routes';

const app   = express();
const PORT  = process.env.PORT || 3333

app.use(cors())
app.use(express.json())
app.use(router);

app.listen(PORT, () => console.log(`Server  running in port ${PORT}`));