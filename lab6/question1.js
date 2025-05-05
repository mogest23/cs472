function createStudent(firstName, lastName, grades) {
    return Object.create(Object.prototype, {
        firstName: {
            value: firstName,
            enumerable: true,
            writable: true,
        },
        lastName: {
            value: lastName,
            enumerable: true,
            writable: true,
        },
        grades: {
            value: grades,
            enumerable: true,
            writable: true,
        },
        inputNewGrade: {
            value: function (newGrade) {
                this.grades.push(newGrade)
            },
            enumerable: true,
        },
        computeAverageGrade: {
            value: function () {
                let sum = 0
                for (let i = 0; i < this.grades.length; i++) {
                    sum += this.grades[i]
                }
                return sum / this.grades.length
            },
            enumerable: true,
        },
    })
}

const students = [
    createStudent('John', 'Doe', [4, 5, 3, 4]),
    createStudent('Jane', 'Smith', [5, 4, 3, 4]),
    createStudent('Alice', 'Johnson', [4, 5, 4, 5]),
    createStudent('Bob', 'Brown', [3, 4, 2, 3]),
]

const averageForAllStudents = (students) => {
    let sum = 0
    for (let i = 0; i < students.length; i++) {
        sum += students[i].computeAverageGrade()
    }
    return sum / students.length
}

console.log(averageForAllStudents(students)) // 3.75