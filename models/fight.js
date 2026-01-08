export class Flight {
  constructor(
    name,
    airline,
    number,
    maxPassengers,
    regularTicketPrice,
    VIPTicketPrice,
    ticketList = []
  ) {
    this.name = name;
    this.airline = airline;
    this.number = number;
    this.maxPassengers = maxPassengers;
    this.regularTicketPrice = regularTicketPrice;
    this.VIPTicketPrice = VIPTicketPrice;
    this.ticketList = ticketList;
  }

  addTicket(ticket) {
    if (this.ticketList.length < this.maxPassengers) {
      this.ticketList.push(ticket);
    }
  }
}
