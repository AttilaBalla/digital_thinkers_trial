import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import {Bootstrap} from "./bootstrap";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

//const driversRoute = require('/routes/formulaDriverRoutes.ts');
// app.use('/drivers', driversRoute)

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

Bootstrap.bootstrapDriverData();

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});