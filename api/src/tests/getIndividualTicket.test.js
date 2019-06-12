//imports for test
import "@babel/polyfill";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import getIndividualTicket from '../getIndividualTicket';
import TicketDetailsResponse from '../entities/TicketDetailsResponse';

const mock = new MockAdapter(axios); 
describe('Get Individual Ticket Test', () => {
	it('Test Individual ticket happy path', async () => {
		const mockedApiHost = 'http://mockedapiUrl';
		const mockedTicketId =  100;
		const mockedApiUrl = `${mockedApiHost}/${mockedTicketId}.json`
		const mockedUsername = 'blah';
		const mockedPassword = 'password123';
		const request = {
			username: mockedUsername,
			password: mockedPassword,
			ticketId: mockedTicketId,
			apiUrl: mockedApiHost
		};
		const mockedApiResponse = {
			ticket: 
				{
					id: 100,
					subject: 'Yes',
					created_at: '2019-06-05T00:56:31Z',
					status: 'open',
					description: "Aute ex sunt culpa ex ea esse sint cupidatat aliqua ex consequ",
					tags:[
						"est",
						"incididunt",
						"nisi"
				]
				}
		};
		const mockedResponse = new TicketDetailsResponse(mockedApiResponse.ticket.id, 
			mockedApiResponse.ticket.subject, mockedApiResponse.ticket.created_at, 
			mockedApiResponse.ticket.status, mockedApiResponse.ticket.description, mockedApiResponse.ticket.tags);
		mock.onGet(mockedApiUrl).reply(200, mockedApiResponse);
		const individualTicket = new getIndividualTicket();
		const response = await individualTicket.Show(request);
		expect(response).not.toBeNull();
		expect(response).toEqual(mockedResponse);
	});

});