// Objects - Group of related properties and/or methods

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isMarried: true,
  talent: ["Singer", "Songwriter", "Dancer"],
};

console.log("Person: ", person);

// Access objects properties
console.log("First Name: ", person["firstName"]);
console.log("Last Name: ", person["lastName"]);
// Using the Dot notation
console.log("Age: ", person.age);
console.log("Talent: ", person.talent);

// Modify the objects properties
person.age = 31;
console.log("Age: ", person.age);

person.greet = function () {
  console.log("Hellow! Welcome to world of ojects");
};
console.log("Person: ", person);

person.greet();
person.greet();
person.greet();

person.introduce = function () {
  console.log("I am " + this.firstName + " " + this.lastName + "!");
  console.log(`I am ${this.firstName} ${this.lastName}!`);
};

person.introduce();

// Nested/Nesting Objects
const address = {
  street: "123 Example Street",
  city: "Example City",
  country: "Example Country",
};
console.log("Address:", address);

person.address = address;
console.log("Person: ", person);
console.log("Person COuntry: ", person.address.country);

// Destructuring
const { firstName: pangalan, lastName: apilyedo, age: edad } = person;
console.log("Firstname: ", pangalan);
console.log("Lastname: ", apilyedo);
console.log("Age: ", edad);

// Spread Operator - pass the key: value from an object to another object
const grades = {
  math: 94,
  english: 90,
  science: 89,
  pe: 98,
};

const gradesWithEC = {
  ...grades,
  extraCurricular: 88,
};

console.log("Grades with extra Curricular: ", gradesWithEC);

// Object.keys(object) - return the keys inside of an object.

const keys = Object.keys(person);
console.log("Keys: ", keys);

// Object.values(objesct) - return the values inside of an object.
const values = Object.values(person);
console.log("Values: ", values);

// Object.entries(object) - return the key and value pair inside of an object.
const keyvaluePair = Object.entries(person);
console.log("Key and Values: ", keyvaluePair);

// Object.assign(object/s) - copy the key and value from multiple objects into a new object.
const information = {
  firstName: "Alice",
  lastName: "Jackson",
};
const information2 = {
  age: 30,
  city: "Example City",
};

const combinedInfo = Object.assign(information, information2);
console.log("Combined information object: ", combinedInfo);

// Object.freeze(object) - prevent modification to an object.
Object.freeze(combinedInfo);
combinedInfo.age = 32;
console.log("Combined information object: ", combinedInfo.age);

// JSON.stringify - convert object to a string.
let personString = JSON.stringify(person);
console.log("Person String: ", personString);

// for in - iterate through the properties of an object
for (let key in person) {
  console.log(`Key: ${key}, Value: ${person[key]}`);
}

// for of - iterate over all the elements of an array.
for (let element of keys) {
  console.log("Element of keys Array:", element);
}
// for of - iterate over all the elements of an array.
for (let element of values) {
  console.log("Element of values Array:", element);
}
