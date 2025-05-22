function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

// Test the function
console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
console.log(sum(10, 20, 30, 40, 50)); // Output: 150
console.log(sum()); // Output: 0 (empty array) 