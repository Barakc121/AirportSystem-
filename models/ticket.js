export class Ticket {
  constructor(price, ownerName) {
    this.ticketNumber = Math.floor(Math.random() * 54321);
    this.price = price;
    this.ownerName = ownerName;
  }
}

export class TicketVip extends Ticket {
  constructor(price, ownerName, benefitsList) {
    super(price, ownerName);
    this.benefitsList = benefitsList;
    this.ticketNumber = Math.floor(Math.random() * 12345);
  }
}

