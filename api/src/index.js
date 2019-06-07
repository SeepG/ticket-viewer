
import express from 'express';
import axios from 'axios';
import 'babel-polyfill';
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express()

app.use(cors({
	exposedHeaders: ["Link"]
}));

app.use(bodyParser.urlencoded({ extended: false }));  

const port = 8000

app.get('/', async (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))