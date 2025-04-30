"use strict";

// 1. 
// a
function computeSumOfSquares(arr) {
    return arr.reduce((sum, curr) => sum + (curr * curr, 0))
}

console.log(computeSumOfSquares([1, 2, 3]));


// b) 
function printOddNumbersOnly(arr) {
    // One option as well
    // arr.array.forEach(element => {
    //     if (element / 2 != 0) {
    //         console.log(element)
    //     }
    // });

    oddNums = arr.filter(num => num % 2 !== 0);

    console.log(oddNums);
}


// c) 
function printFibo(n, a, b) {
    Array.from({ length: n }).forEach(() => {
        console.log(a);
        [a, b] = [b, a + b];
    });
}


// 2.
let user = { name: "John", years: 30 };

let { name, years, isAdmin = false } = user;

console.log(name);
console.log(years);
console.log(isAdmin);

// 3.
let libraryBooks = [
    { title: "The Road Ahead", author: "Bill Gates", ID: 1235 },
    { title: "Walter Isaacson", author: "Steve Jobs", ID: 4268 },
    { title: "The Road Ahead", author: "Bill Gates", ID: 4268 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", ID: 3257 }
];

function addBook(title, author, ID) {
    let newBook = { title, author, ID };
    libraryBooks.push(newBook);
    return newBook;
}

function getTitles() {
    return libraryBooks.map(book => book.title).sort();
}

function findBooks(keyword) {
    return libraryBooks.filter(book => book.title.includes(keyword)).sort((a, b) => a.ID - b.ID);
}