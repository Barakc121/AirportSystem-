import {
  createPerson,
  getAllPeople,
  updatePerson,
  deletePerson
} from "services/peopleService.js";

beforeEach(() => {
});


test("CREATE – person is created with id", () => {
  const p = createPerson("barak");
  expect(p.id).toBeDefined();
});

test("CREATE – welcome message is correct", () => {
  const p = createPerson("hanan");
  expect(p.welcome()).toBe("welcome hanan");
});

test("READ – getAllPeople returns array", () => {
  const people = getAllPeople();
  expect(Array.isArray(people)).toBe(true);
});

test("READ – array length increases after create", () => {
  const before = getAllPeople().length;
  createPerson("dani");
  const after = getAllPeople().length;
  expect(after).toBe(before + 1);
});
test("UPDATE – updates existing person name", () => {
  const p = createPerson("avia");
  updatePerson(p.id, "avi");
  expect(p.name).toBe("avi");
});

test("UPDATE – returns null if id not found", () => {
  const result = updatePerson(999, "not found");
  expect(result).toBe(null);
});


test("DELETE – deletes existing person", () => {
  const p = createPerson("camisa");
  const result = deletePerson(p.id);
  expect(result).toBe(true);
});

test("DELETE – returns false if id not found", () => {
  const result = deletePerson(12345);
  expect(result).toBe(false);
});