import express, { type Express, type Request, type Response } from 'express';
import { request } from 'node:http';

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listen on port ${port}`)
})

