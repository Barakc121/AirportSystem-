import RegisteredPerson from "..RegisteredPerson.js";

let people = [];
let nextId = 1;

// CREATE
export function createPerson(name) {
  const person = new RegisteredPerson(name, nextId++);
  people.push(person);
  return person;
}

// READ
export function getAllPeople() {
  return people;
}

// UPDATE
export function updatePerson(id, newName) {
  const person = people.find(p => p.id === id);
  if (!person) return null;

  person.name = newName;
  return person;
}

// DELETE
export function deletePerson(id) {
  const index = people.findIndex(p => p.id === id);
  if (index === -1) return false;

  people.splice(index, 1);
  return true;
}