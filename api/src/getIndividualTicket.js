
import axios from 'axios';

import TicketDetailsResponse from './entities/TicketDetailsResponse'

class GetIndividualTicket{
	async Show(request){
			const username = request.username;
			const password = request.password;
			const ticketId = request.ticketId;
			const requestUrl = `${request.apiUrl}/${ticketId}.json`;
			const apiResponse = await axios.get(requestUrl,
				{
					auth: {
									username,
									password
							}
				}
			);
			const apiTicketResponse = apiResponse.data.ticket;
			const individualTicketResponse = new TicketDetailsResponse(apiTicketResponse.id, 
				apiTicketResponse.subject, apiTicketResponse.created_at, 
				apiTicketResponse.status,apiTicketResponse.description, apiTicketResponse.tags)
			return individualTicketResponse;
	}
}

export default GetIndividualTicket