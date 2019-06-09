class TicketsResponse {
  constructor(id, subject, created_at, status, priority) {
    this.id = id;
    this.subject = subject;
		this.created_at = created_at;
    this.status = status;
    this.priority = priority;
  }
}

export default TicketsResponse;