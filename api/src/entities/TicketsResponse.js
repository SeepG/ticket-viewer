class TicketsResponse {
  constructor(id, subject, created_at, status) {
    this.id = id?id:0; 
    this.subject = subject?subject:'';
		this.created_at = created_at?created_at:'';
    this.status = status?status:'';
  }

  
}

export default TicketsResponse;