//imports for test
import "@babel/polyfill";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import getAllTickets from '../getAllTickets';

// mock data is used for testing 

const mock = new MockAdapter(axios); 
describe('Get All Tickets Test', () => {
	it('Test Get All Tickets happy path', async () => {
		const pageNumber = 2;
		const perPageCount = 25;
		const mockedApiHost = 'http://mockedapiUrl';
		const mockedApiUrl = `${mockedApiHost}?page=${pageNumber}&per_page=${perPageCount}&sort_by=id`
		const mockedUsername = 'blah';
		const mockedPassword = 'password123';
		const request = {
			username: mockedUsername,
			password: mockedPassword,
			pageNumber: pageNumber,
			per_page: perPageCount,
			apiUrl: mockedApiHost
		};
		const mockedResponse = {
			tickets: [
				{
					id: 1,
					subject: 'subject',
					created_at: '2019-06-05T00:56:31Z',
					status: 'open'
				}
			],
			count:20
		};
		mock.onGet(mockedApiUrl).reply(200, mockedResponse);
		const allTickets = new getAllTickets();
		const response = await allTickets.List(request);
		expect(response).not.toBeNull();
		expect(response).toEqual(mockedResponse);
	});

});