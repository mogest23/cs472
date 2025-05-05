function Student(firstName, lastName, grades) {
    this.firstName = firstName
    this.lastName = lastName
    this.grades = grades
    this.inputNewGrade = function (newGrade) {
        this.grades.push(newGrade)
    }
    this.computeAverageGrade = function () {
        let sum = 0
        for (let i = 0; i < this.grades.length; i++) {
            sum += this.grades[i]
        }
        return sum / this.grades.length
    }
}

const students = [
    new Student('John', 'Doe', [4, 5, 3, 4]),
    new Student('Jane', 'Smith', [5, 4, 3, 4]),
    new Student('Alice', 'Johnson', [4, 5, 4, 5]),
    new Student('Bob', 'Brown', [3, 4, 2, 3]),
]

const averageForAllStudents = (students) => {
    let sum = 0
    for (let i = 0; i < students.length; i++) {
        sum += students[i].computeAverageGrade()
    }
    return sum / students.length
}

console.log(averageForAllStudents(students)) // 3.75