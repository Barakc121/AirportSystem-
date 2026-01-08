import { TicketVip, Ticket } from "./ticket.js";

export class Passenger {
  constructor(name, ID, amountOfMoney) {
    this.name = name;
    this.ID = ID;
    this.amountOfMoney = amountOfMoney;
  }

  haveMonney() {
    return this.amountOfMoney > 0;
  }
}

export class StudentPassenger extends Passenger {
  constructor(name, ID, amountOfMoney, school) {
    super(name, ID, amountOfMoney);
    this.school = school;
  }
  buyTicket(airport, flightName, regularOrVip) {
    const fly = airport.flightList.find((flight) => flight.name == flightName);

    if (regularOrVip === "regular") {
      const ticket = fly?.ticketList.find(
        (t) => t instanceof Ticket && !(t instanceof TicketVip)
      );
      if (!ticket || ticket.username) {
        return "no ticket found";
      }

      const finalPrice = ticket.price * 0.9;
      if ((this.amountOfMoney -= finalPrice >= 0)) {
        this.amountOfMoney -= finalPrice;

        ticket.username = this.name;
        return;
      }
      return false;
    }
    if (regularOrVip === "vip") {
      const ticket = fly?.ticketList.find((t) => t instanceof TicketVip);
      if (!ticket || ticket.username) {
        return "no ticket found";
      }

      const finalPrice = ticket.price;
      if (this.amountOfMoney >= finalPrice) {
        this.amountOfMoney -= finalPrice;

        ticket.username = this.name;
        return;
      }
      return false;
    }
  }
}

export class RegularPassenger extends Passenger {
  constructor(name, ID, amountOfMoney, workplace, knowsAirportEmployee) {
    super(name, ID, amountOfMoney);
    this.workplace = workplace;
    this.knowsAirportEmployee = knowsAirportEmployee;
  }

  buyTicket(airport, flightName, regularOrVip) {
    const fly = airport.flightList?.find((flight) => flight.name === flightName);

    if (regularOrVip === "regular") {
      const ticket = fly.ticketList.find(
        (t) => t instanceof Ticket && !(t instanceof TicketVip)
      );
      if (ticket.username) {
        return "ticket not found";
      }
      if (!ticket) {
        return "no ticket found";
      }

      const finalPrice = this.knowsAirportEmployee
        ? ticket.price * 0.8
        : ticket.price;
      if (this.amountOfMoney >= finalPrice) {
        this.amountOfMoney -= finalPrice;

        ticket.username = this.name;
        return `you pay  ${finalPrice}`;
      }
      return false;
    }

    if (regularOrVip === "VIP") {
      const ticket = fly.ticketList.find((t) => t instanceof TicketVip);
      if (ticket.username) {
        return "ticket not found";
      }
      if (!ticket) {
        return "no ticket found";
      }
      const finalPrice = this.knowsAirportEmployee
        ? ticket.price * 0.85
        : ticket.price;
      if (this.amountOfMoney >= finalPrice) {
        this.amountOfMoney -= finalPrice;

        ticket.username = this.name;
        return `you pay  ${finalPrice}`;
      }
      return false;
    }
  }
}
