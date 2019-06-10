
const per_page = 25;
const renderAllTickets = (tickets, count) => {
		tickets.forEach(function(ticket) {
		let tableRow = `<tr>`;
		tableRow += `<th scope="row"><a href="?ticketid=${ticket.id}">${ticket.id}</a></th>`;
		tableRow +=`<td>${ticket.subject}</td>`;
		tableRow +=`<td>${ticket.status}</td>`;
		tableRow += `<td>${ticket.created_at}</td>`;
		tableRow += `</tr>`;
		document.getElementById("ticketsTableBody").innerHTML += tableRow;
});
	let numberOfPages = parseInt(count/per_page);//converts float to int e.g. 4.04 to 4
	if(count%per_page > 0){
		numberOfPages = numberOfPages + 1;
	}
	let pageLinks = '';
  for(let i=1; i<=numberOfPages; i++){
		pageLinks += `<a href=?page=${i}>${i}</a>`;
	}
	document.getElementById('divPagination').innerHTML = pageLinks;
}
	const renderTicketDetails = (ticket) => {
	
		let tableBody = `<tr><th scope="row">Ticket Id</th><td>${ticket.id}</td></tr>`;
		tableBody +=`<tr><th scope="row">Subject</th><td>${ticket.subject}</td></tr>`;
		tableBody +=`<tr><th scope="row">Description</th><td>${ticket.description}</td></tr>`;
		tableBody +=`<tr><th scope="row">Tags</th><td>${ticket.tags}</td></tr>`;
		tableBody +=`<tr><th scope="row">Status</th><td>${ticket.status}</td></tr>`;
		tableBody +=`<tr><th scope="row">Created At</th><td>${ticket.created_at}</td></tr>`
		document.getElementById("ticketDetails").innerHTML += tableBody;

}
const getTickets = (pageNumber) =>{
	fetch(`http://localhost:8000/tickets?page=${pageNumber}&per_page=${per_page}`)
	.then((response) => {
		if(response.status === 200){
			return(response.json());
		}
		else{
			console.log(response);
			document.getElementById("divErrorMessage").innerHTML = 'Error';
		}
	})
	.then((data)=> {
		renderAllTickets(data.tickets, data.count);
	})
	.catch((err) => {
		console.log(err.message);
		document.getElementById("divErrorMessage").innerHTML = err.message;
	})
}

const getTicketDetails = (ticketId) =>{
	fetch(`http://localhost:8000/tickets/${ticketId}`)
	.then((response) => {
			return(response.json());
	})
	.then((data)=> {
		if(data.message){
			throw Error(data.message);
		}
		else{
			renderTicketDetails(data);
		}
	})
	.catch((err) => {
		console.log(err.message);
		document.getElementById("divErrorMessage").innerHTML = err.message;
	})
}

const init = ()=>{
	const params = new URLSearchParams(window.location.search);
	const pageNumber = params.get('page');
	const ticketId = params.get('ticketid');

	if(pageNumber){
		let divAllTickets = document.getElementById('divAllTickets');
		divAllTickets.style.display = '';
		let divTicketDetails = document.getElementById('divTicketDetailsView');
		divTicketDetails.style.display = 'none';
		getTickets(pageNumber);
	}
	else if(ticketId){
		let divAllTickets = document.getElementById('divAllTickets');
		divAllTickets.style.display = 'none';
		let divTicketDetails = document.getElementById('divTicketDetailsView');
		divTicketDetails.style.display = '';
		getTicketDetails(ticketId);
	}
	else{
		getTickets(1);
	}
}

init();


