import {
  createPerson,
  getAllPeople,
  updatePerson,
  deletePerson
} from "services/peopleService.js";

const p1 = createPerson("barak");
console.log(p1.welcome());

const p2 = createPerson("hanan");
console.log(getAllPeople());

updatePerson(1, "avram and belulu");
console.log(getAllPeople());

deletePerson(2);
console.log(getAllPeople());