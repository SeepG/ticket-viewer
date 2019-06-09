import TicketsResponse from './TicketsResponse'

// class for individual ticket response inherits from parent Tickets response

class TicketDetailsResponse extends TicketsResponse{
	constructor(id, subject, created_at, status, priority, description, tags) {
		super(id, subject, created_at, status, priority)
		this.description = description;
		this.tags = tags;
  }
}
export default TicketDetailsResponse;