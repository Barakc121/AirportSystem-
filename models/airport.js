import {Flight} from './fight.js'
import { Ticket, TicketVip} from './ticket.js';


export class Airport {
  constructor(    flightList = []
) {
    this.flightList = flightList;
  }
  addfly() {
    const fly1 = new Flight("fly :585", "fly 1", "1234", 100, 50, 80);
    const fly2 = new Flight("fly :518", "fly 2", "5678", 100, 50, 80);
    const fly3 = new Flight("fly :929", "fly 3", "9632", 100, 50, 80);
    this.flightList.push(fly1, fly2, fly3);
  }
  createTicket() {
    this.flightList.forEach((flight) => {
      const totalTickets = flight.maxPassengers;
      const TicketVipsCount = totalTickets * 0.1;
      const regularTicketCount = totalTickets * 0.9;
      for (let i = 0; i < TicketVipsCount; i++) {
        const ticketVip = new TicketVip(
          flight.TicketVipPrice
          
        );
        flight.addTicket(ticketVip);
      }
      for (let i = 0; i <= regularTicketCount; i++) {
        const regularTicket = new Ticket(
          flight.regularTicketPrice);
        flight.addTicket(regularTicket);
      }
    });
  }
}
