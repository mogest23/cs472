interface Person {
    name: string;
    age: number;
    isStudent: boolean;
}

function describePerson(person: Person): string {
    const studentStatus = person.isStudent ? "is" : "is not";
    return `${person.name} is ${person.age} years old and ${studentStatus} a student.`;
}

// Test the function
const person1: Person = {
    name: "John",
    age: 25,
    isStudent: true
};

const person2: Person = {
    name: "Alice",
    age: 30,
    isStudent: false
};

console.log(describePerson(person1)); // Output: John is 25 years old and is a student.
console.log(describePerson(person2)); // Output: Alice is 30 years old and is not a student. 