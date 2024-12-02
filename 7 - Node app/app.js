console.log("Hello World");

/*
REPL (Read-Eval-Print-Loop)

* Read - It READ the Javascript code entered by the developer, interpreting it for execution.
* Eval - the entered code is then evaluated by JS engine, which processes and executes statements
* Print - the results of the evaluated code that is PRINTED or displayed on the console.
* Loop - process that reports in a loop, to input, evaluate and view results of the codes.

Module - is a file containing JS code that defines specific functionalitites, it may include variables, functions and classes.

* syntax -  is a part of arrow  functions to define functions. You can use this to work with non-numarical values like strings, objects or arrays
*/

const product = require('./product');
const cart = require('./cart');
const calculateTotal = require('./order');
const products = require('./product');

// add products to the cart
cart.addToCart(products[0]);
cart.addToCart(product[2]);

// display the cart items
console.log('Cart items: ', cart.getCartItems());

// calculate and displya the total order amoun
const totalAmount = calculateTotal(cart.getCartItems());
console.log('Total order amount: $', totalAmount);

/*
* NATIVE MODULES- refers to modules that are build into Node.Js runtime

File System Module (fs)
- essential tool for handling input/output operations in Node.Js apps

* Reading a File - fs.readFile is used to read the contents of a file
* Writing to a file - fs.writefile allows developers to asynchronously write data to a file
* Checking id a file or directory exists - fs.existsSynch is used synchronously to chack if a file exists
* Create Directory - fs.mkdir method is used to asynchronously make directory
* Listing files - fs.readdir is used to retrieve the list of files in a directory

*/
//Reading a file
const fs = require('fs');
fs.readFile('example.txt', 'utf8', (err, data) => {
    if(err) {
        console.error(err);
        return;
    }
    console.log('File Content: ', data);
});

// Writing a file
const content = 'Hello, Node.Js!';
fs.writeFile('output.txt', content, 'uft8', (err) => {
    if(err) {
        console.error(err);
        return;
    }
    console.log('Data is written to the file successfully!: ');
});

// Checking if a file or directory exist

const filePath = 'example.txt';
if(fs.existsSync(filePath)) {
    console.log('File exists');
} else (
    console.log('File does not exists')
)

// Creating a directory
fs.mkdir('new_directory', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Directory created successfully');
});

// Listing files in directory
const directoryPath = 'some-directory';
fs.readdir(directoryPath, (err, files) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('Files in the directory', files);
})


/* PATH MODULES - this provides utilities for working with files and directory paths 
*/

//Joining Paths - path.join method is used to join multiple path segments in to single path.
const path = require('path');

const joinedPath = path.join('/user', 'document', 'files', ' exapmle.txt');
console.log('Joined Path: ', joinedPath);

// Resolving Paths - path.resolve used to resolve a sequence of path or path segments into an absolute path

const resolvePath = path.resolve('example.txt');
console.log('Resolved path: ', resolvePath);

// Normalizing Paths - path.normalize is a method used to normalize path by resolving '../' by simplifying complex and redundant paths

const complexPath = '/user/documents/../files/example.txt';
const normalizePath = path.normalize(complexPath);

console.log('Normalize Path', normalizePath);

// Extracting File Information - path.parse method breaks a file path into an object containing its components like directory, base file name, and file extension

const filePath2 = "/users/documents/example.txt";

const parsedPath = path.parse(filePath2);

console.log(parsedPath);