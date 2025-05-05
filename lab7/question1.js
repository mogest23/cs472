// Question constructor
function Question(qid, answer) {
    this.qid = qid;
    this.answer = answer;
}

Question.prototype.checkAnswer = function (answer) {
    return this.answer === answer;
};

// Student constructor
function Student(studentId) {
    this.studentId = studentId;
    this.answers = [];
}

Student.prototype.addAnswer = function (question) {
    this.answers.push({ qid: question.qid, answer: question.answer });
};

// Quiz constructor
function Quiz(questions, students) {
    this.students = students;
    this.questions = new Map();

    // Convert array of Question objects into a Map
    for (let q of questions) {
        this.questions.set(q.qid, q.answer);
    }
}

Quiz.prototype.scoreStudentBySid = function (sid) {
    const student = this.students.find(s => s.studentId === sid);
    if (!student) return 0;

    let score = 0;
    for (let ans of student.answers) {
        const correctAnswer = this.questions.get(ans.qid);
        if (correctAnswer === ans.answer) {
            score++;
        }
    }
    return score;
};

Quiz.prototype.getAverageScore = function () {
    if (this.students.length === 0) return 0;

    const totalScore = this.students.reduce((sum, student) => {
        return sum + this.scoreStudentBySid(student.studentId);
    }, 0);

    return totalScore / this.students.length;
};

// ===== Usage Example =====
const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));

const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));

const students = [student1, student2];

const questions = [
    new Question(1, 'b'),
    new Question(2, 'a'),
    new Question(3, 'b')
];

const quiz = new Quiz(questions, students);

console.log(quiz.scoreStudentBySid(10)); // Expected: 3
console.log(quiz.scoreStudentBySid(11)); // Expected: 2
console.log(quiz.getAverageScore());     // Expected: 2.5