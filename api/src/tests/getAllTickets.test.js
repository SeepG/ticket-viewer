//imports for test
import "@babel/polyfill";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import getAllTickets from '../getAllTickets';

const mock = new MockAdapter(axios);
describe('Get All Tickets Test', () => {
	it('Test Get All Tickets happy path', async () => {
		const pageNumber = 2;
		const perPageCount = 25;
		const mockedApiHost = 'http://mockedapiUrl';
		const mockedApiUrl = `${mockedApiHost}?page=${pageNumber}&per_page=${perPageCount}&sort_by=created_at&sort_order=desc`
		const mockedUsername = 'blah';
		const mockedPassword = 'password123';
		const request = {
			username: mockedUsername,
			password: mockedPassword,
			page: pageNumber,
			per_page: perPageCount,
			apiUrl: mockedApiHost
		};
		const mockedResponse = {
			tickets: [
				{
					id: 1
				}
			]
		};
		mock.onGet(mockedApiUrl).reply(200, mockedResponse);
		const allTickets = new getAllTickets();
		const response = await allTickets.List(request);
		expect(response).not.toBeNull();
		expect(response).toEqual(mockedResponse);
	});

});