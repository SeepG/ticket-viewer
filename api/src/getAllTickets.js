import axios from 'axios';

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
			return apiResponse.data;
	}
}

export default GetAllTickets