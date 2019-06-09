import axios from 'axios';
import TicketsResponse from './entities/TicketsResponse';
class GetAllTickets{
	async List(request){
			const username = request.username;
			const password = request.password;
			let pageNumber = request.page;
			let per_page = request.per_page;
			const requestUrl = `${request.apiUrl}?page=${pageNumber}&per_page=${per_page}&sort_by=created_at&sort_order=desc`;
			const apiResponse = await axios.get(requestUrl,
				{
					auth: {
									username,
									password
							}
				}
			);
			const response = {
				tickets:[],
				count: apiResponse.data.count
			};
			for(let ticket of apiResponse.data.tickets){
				const ticketResponse = new TicketsResponse(ticket.id, 
					ticket.subject, 
					ticket.created_at, 
					ticket.status,
					ticket.priority);
					response.tickets.push(ticketResponse);
			}
			return response;
	}
}

export default GetAllTickets
