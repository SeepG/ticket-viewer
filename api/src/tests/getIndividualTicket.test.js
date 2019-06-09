//imports for test
import "@babel/polyfill";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import getIndividualTicket from '../getIndividualTicket';

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
		const mockedResponse = {
			tickets: [
				{
					id: 100,
					subject: 'Yes'
				}
			]
		};
		mock.onGet(mockedApiUrl).reply(200, mockedResponse);
		const individualTicket = new getIndividualTicket();
		const response = await individualTicket.Show(request);
		expect(response).not.toBeNull();
		expect(response).toEqual(mockedResponse);
	});

});