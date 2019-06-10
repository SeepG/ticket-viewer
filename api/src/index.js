
//importing dependencies
import express from 'express';
import '@babel/polyfill';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import config from './config';
import getAllTickets from './getAllTickets';
import getIndividualTicket from './getIndividualTicket';

dotenv.config()
const app = express()
app.use(cors({
	exposedHeaders: ["Link"]
}));
app.use(bodyParser.urlencoded({ extended: false }));  

// All tickets API

const allTickets = new getAllTickets();
app.get('/tickets',async (req,res)=> {
		try{
			// created a request variable with json object
			const request = {
				username: config.username,
				password: config.password,
				pageNumber: req.query.page,
				per_page: req.query.per_page,
				apiUrl: config.url
			};
			const response = await allTickets.List(request);
			res.json(response);
		}
		catch(err){
			console.log(err);
			if(err.response.status === 500){
				res.status(500).send({message:'Internal error has occurred'});
			}
			if(err.response.status === 404){
				res.status(404).send({message:`Tickets API doesn't exist`});
			}
			else{
			res.status(err.response.status).send({message:err.message});
			}
		}
});

// Individual Ticket API

const individualTicket = new getIndividualTicket();
app.get('/tickets/:id',async (req,res)=> {
		try{
			const request = {
				username: config.username,
				password: config.password,
				ticketId: req.params.id,
				apiUrl: config.url
			};
			const response = await individualTicket.Show(request);
			res.json(response);
		}
		catch(err){
			console.log(err);
			if(err.response.status === 500){
				res.status(500).send({message:'Internal error has occurred'});
			}
			if(err.response.status === 404){
				res.status(404).send({message:`Ticket ID - ${req.params.id} doesn't exist`});
			}
			else{
			res.status(err.response.status).send({message:err.message});
			}
		}
});

app.listen(config.port, () => console.log(`App listening on port ${config.port}!`))


