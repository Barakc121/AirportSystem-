import { Airport } from "./models/airport.js";
import {
  RegularPassenger,
  StudentPassenger,
} from "./models/passengers.js";

function finishmain() {
    
  const airport = new Airport();
  airport.addfly();
  airport.createTicket();
  const regular = new RegularPassenger("yehouda", 123, 5000, "uytf", true);
  const student = new StudentPassenger("YEHIEL", 1235, 9878, "IUG");
  console.log(regular.buyTicket(airport, "Flight 101", "regular"));

  console.log(student.buyTicket(airport, "Flight 101", "VIP"));
}  
console.log(finishmain())