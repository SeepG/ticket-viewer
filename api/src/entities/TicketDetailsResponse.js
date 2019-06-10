import TicketsResponse from './TicketsResponse'

// class for individual ticket response inherits from parent Tickets response

class TicketDetailsResponse extends TicketsResponse{
	constructor(id, subject, created_at, status, description, tags) {
		super(id, subject, created_at, status)
		this.description = description?description:'';
		this.tags = tags?tags:[];
  }
}
export default TicketDetailsResponse;