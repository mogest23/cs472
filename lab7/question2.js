class Question {
    constructor(qid, answer) {
        this.qid = qid;
        this.answer = answer;
    }

    checkAnswer(answer) {
        return this.answer === answer;
    }
}

class Student {
    constructor(studentId) {
        this.studentId = studentId;
        this.answers = [];
    }

    addAnswer(question) {
        this.answers.push({ qid: question.qid, answer: question.answer });
    }
}

class Quiz {
    constructor(questions, students) {
        this.students = students;
        this.questions = new Map();
        for (let q of questions) {
            this.questions.set(q.qid, q.answer);
        }
    }

    scoreStudentBySid(sid) {
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
    }

    getAverageScore() {
        if (this.students.length === 0) return 0;

        const total = this.students.reduce((sum, student) => {
            return sum + this.scoreStudentBySid(student.studentId);
        }, 0);

        return total / this.students.length;
    }
}