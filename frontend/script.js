
const render = (tickets) => {

		tickets.forEach(function(ticket) {
		let tableRow = `<tr>`;
		tableRow += `<th scope="row">${ticket.id}</th>`;
		tableRow +=`<td>${ticket.subject}</td>`;
		tableRow +=`<td>${ticket.status}</td>`;
		tableRow += `<td>${ticket.created_at}</td>`;
		tableRow += `</tr>`;
		document.getElementById("ticketsTableBody").innerHTML += tableRow;
});

}

const getTickets = (pageNumber) =>{
	fetch(`http://localhost:8000/tickets?page=${pageNumber}&per_page=25`)
	.then((response) => {
		return(response.json());
	})
	.then((data)=> {
		render(data.tickets);
	})
	.catch((err) => {
		console.log(err.message)
	})
}

getTickets(1);

