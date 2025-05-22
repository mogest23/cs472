const arr1: number[] = [1, 2, 3];
const arr2: number[] = [4, 5, 6];

// Using spread operator to concatenate arrays
const combinedArray: number[] = [...arr1, ...arr2];

console.log("Array 1:", arr1);
console.log("Array 2:", arr2);
console.log("Combined Array:", combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// Alternative way using Array.concat()
const combinedArray2: number[] = arr1.concat(arr2);
console.log("Combined Array (using concat):", combinedArray2); // Output: [1, 2, 3, 4, 5, 6] 