function secondLargest(numbers: number[]): number {
    if (numbers.length < 2) {
        throw new Error("Array must have at least 2 numbers");
    }

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (const num of numbers) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }
    }

    if (secondLargest === -Infinity) {
        throw new Error("No second largest number found");
    }

    return secondLargest;
}

// Test the function
console.log(secondLargest([20, 120, 111, 215, 54, 78])); // Output: 120
console.log(secondLargest([1, 2, 3, 4, 5])); // Output: 4
console.log(secondLargest([5, 5, 5, 5])); // Throws error: No second largest number found 