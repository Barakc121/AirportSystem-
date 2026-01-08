import { Airport } from "../models/airport.js";
import { describe, test } from "node:test";

describe("Airport Management System", () => {
  test("not have time for test", () => {
    const airport = new Airport();
    airport.addfly();
    airport.createTicket();
  });
});
