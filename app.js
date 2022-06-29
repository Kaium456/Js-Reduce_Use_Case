// javascript Reduce Use Case:
const people = [
  { id: "1", name: "Leigh", age: 35 },
  { id: "2", name: "Jenny", age: 30 },
  { id: "3", name: "Heather", age: 28 },
];
let result;
// count id
result = people.reduce((acc, person) => acc + 1, 0);
// sum age
result = people.reduce((acc, person) => acc + person.age, 0);
// name of array
result = people.reduce((acc, person) => [...acc, person.name], []);
// new object
result = people.reduce((acc, person) => {
  return { ...acc, [person.id]: person };
}, {});

// min age
result = people.reduce((acc, person) => {
  if (acc === null || person.age < acc) return person.age;
  return acc;
}, null);

// Find by name
result = people.reduce((acc, person) => {
  if (acc !== null) return acc;
  if (person.name === "Leigh") return person;
  return null;
}, null);

//  all over 18
result = people.reduce((acc, person) => {
  if (!acc) return false;
  return person.age > 18;
}, true);

// any over 18
result = people.reduce((acc, person) => {
  if (acc) return true;
  return person.age > 18;
}, false);

const orders = [
  { id: "1", status: "pending" },
  { id: "2", status: "pending" },
  { id: "3", status: "cancelled" },
  { id: "4", status: "shipped" },
];

result = orders.reduce((acc, order) => {
  return { ...acc, [order.status]: (acc[order.status] || 0) + 1 };
}, {});

const folders = [
  "index.js",
  ["flatten.js", "map.js"],
  ["any.js", ["all.js", "count.js"]],
];

function flatten(acc, item) {
  if (Array.isArray(item)) {
    return item.reduce(flatten, acc);
  }

  return [...acc, item];
}

result = folders.reduce(flatten, []);

// create reduce ourselves

function reduce(array, callback, value) {
  let acc = value;
  for (let i = 0; i < array.length; i++) {
    acc = callback(acc, array[i], i);
  }
  return acc;
}
result = reduce([1, 2, 3], (acc, num) => acc + num, 0);
// console.log(result);
