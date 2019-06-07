
import express from 'express';
import axios from 'axios';
import 'babel-polyfill';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import config from './config';

dotenv.config()
const app = express()
app.use(cors({
	exposedHeaders: ["Link"]
}));
app.use(bodyParser.urlencoded({ extended: false }));  

const username = process.env.USERNAME;
const password = process.env.PASSWORD;
app.get('/', async (req, res) => res.send('Hello World!'))
app.get('/tickets',async (req,res)=> {
	try{
		let pageNumber = req.query.page;
		let per_page = req.query.per_page;
	const resp = await axios.get(`https://codingchallengejune2019.zendesk.com/api/v2/tickets?page=${pageNumber}&per_page=${per_page}&sort_by=created_at&sort_order=desc`,
	{
		auth: {
						username,
						password
				}
	}
	);
	let result = resp.data;

	res.json(result);
	}
	catch(err){
		console.log(err);
		if(err.response.status === 404){
			res.status(404).send('No record found');
		}
	}
});

app.listen(config.port, () => console.log(`Example app listening on port ${config.port}!`))


