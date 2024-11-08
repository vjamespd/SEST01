let fruits = ["Apple", "Banana", "Cherry", "Mango", "Avocado", "Grapes"];

console.log(fruits);

// Check the length of the array
console.log("Fruits Length: ", fruits.length);

// Array indexing - access elements using index
console.log("First Fruit: ", fruits[0])
console.log("4th Fruit: ", fruits[3])
console.log("last Fruit: ", fruits[fruits.length-1])

// Method - function that belongs to an object (array)
// .at(index - access an element using its index)
console.log("Fruit: ", fruits.at(4))
console.log("Fruit: ", fruits.at(7))

// .join(seperator) - combine all the elements in a string
const joinedFruits = fruits.join(" ");
console.log("Joined Fruits: ", joinedFruits);

// .slice(starting_index, index of the element not included) - access a portion of the array
const slicedFruits = fruits.slice(2,5)
console.log("Sliced fruits: ", slicedFruits);
console.log("Original Fruits: ", fruits)

// Updating element
fruits[2] = "Kiwi";
console.log("Updated fruits: ", fruits)

// Adding an element
// .push(element - )Adding an element at the end of an array
fruits.push("Melon");
console.log("Updated fruits: ", fruits)

// .unshift(element) - add an element at the beginning of the array
fruits.unshift("Kiwi");

// Delete element
// .pop() - delete an element at the end of the array
fruits.pop();
console.log("Updated fruits: ", fruits)

// .shift() - delete an element at the beginning of the array
fruits.shift();
console.log("Fruits: ", fruits)

// .splice() - add/delete elements at a specific index
// 1st argument: Starting index
// 2nd argument: delete count
// 3rd argument: The element/s you want to add
fruits.splice(2,2, "Melon", "Pineapple");
console.log("Spliced Frutis: ", fruits)

// Searching elements
// .includes(element) - return true if the element exist otherwise false
console.log("Is avocado in the array? ", fruits.includes("Avocado"))

// .indexOf(element) - return the index of the element or -1
let indexOfMelon = fruits.indexOf("Melon");
console.log("Index of Melon: ", indexOfMelon)

// Add a duplicate element
fruits.push("Avocado");
fruits.unshift("Avocado")
console.log("Fruits: ", fruits);

let indexOfAvocado = fruits.indexOf("Avocado");
console.log("Index of Avocado: ", indexOfAvocado);

// .lastIndexOf(element) - return the index of the last instance of the element
let lastIndexOfAvocado = fruits.lastIndexOf("Avocado");
console.log("Last Index of Avocado: ", lastIndexOfAvocado);

// Sorting Elements
// .sort() - sort the array in alphabetical order/numerical order.
fruits.sort();

// sort().reverse() - sort the array in alphabetical order/numerical order first then reverse it.
fruits.sort().reverse();
console.log("Fruits: ", fruits);

let numbers = [0, 9, 1, 8, 2, 7, 3, 6, 4, 5]

// .reversr() -sort them in reverse order.
numbers.reverse();
console.log("Numbers: ", numbers)

let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];

// typeof - check the data type of a variable
console.log("Data type of Odd: ", typeof odd);

// .concat() - create a new array by merging two array
let oddEvenCombined = odd.concat(even);
console.log("Combined: ", oddEvenCombined)

// .toString() - convert an array to a comma-seperated string
console.log("Odd and Even in String ", oddEvenCombined.toString());

// .forEach() - iterate over an array, and in each iteration execute a function.
console.log("Even: ", even);
even.forEach(function (number){
    console.log("Number: ", number, "* 2: ", number*2)
});

// .map() - create a new array by applying a function to the original array.
console.log("Even: ", even);
let squaredEvenArray = even.map(function (number){
    return number * number
});
console.log("Squared Even Array: ", squaredEvenArray);

// .filter() - create a new array with elements that passed the test condition.
console.log("Numbers:", numbers);
numbers.sort();
console.log("Sorted Numbers:", numbers);
// Modulo/Modulus = %
console.log(9 % 2 == 0);
// Even = False/0
// Odd = True/1

let filteredEvenNumbers = numbers.filter(function (number){
    return number % 2 == 0
});
console.log("Filtered Even Numbers:", filteredEvenNumbers)


let oddEvenNumbers = numbers.filter(function (number){
    return number % 2 == 1
});
console.log("Filtered Odd Numbers:", oddEvenNumbers)


// .every() - return true if all elements pass the test condition
console.log("Numbers: ", numbers);

let isEveryElementGreaterThanOne = numbers.every(function (number){
    return number >= 0
})
console.log("Is every element greater than or equal to zero: ", isEveryElementGreaterThanOne);


// .some() - return true if atleast one element passed the test condition.
let result = numbers.some(function (number){
    return number == 5
});
console.log("Is there a 5 inside of the numbers array?", result);

// .reduced() - combine elements into a single value.
// accumulator - total
let total = numbers.reduce(function (accumulator, currentElement){
    return accumulator + currentElement
}, 0)
// accumulator = 45
// currentElement = 9
console.log("Total:", total);

// .fill() - replace all the element in an array
let numbers_v2 = ["One", "Two", "Three"];
let arrayOfNumber10 = numbers_v2.fill(10);
console.log("Array of 10:", arrayOfNumber10);

// .flat() - remove the nesting
let nestedNumbers = [[1, 2, 3], [4, 5, 6]];
console.log(nestedNumbers);
console.log("Not Nested Number:", nestedNumbers.flat());

// .find() - return the first element that pass the test condition.
let firstNumberGreaterThanFive = numbers.find(function (number){
    return number > 5;
})
console.log("First number greater than five" , firstNumberGreaterThanFive);

// .findIndex() - return the first index of the element that pass the test condition.
console.log(numbers)
let findIndexResult = numbers.findIndex(function (number){
    return number > 5;
})
console.log("Index of the first number greater than five is", findIndexResult);