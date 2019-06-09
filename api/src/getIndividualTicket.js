
import axios from 'axios';

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
			return apiResponse.data;
	}
}

export default GetIndividualTicket