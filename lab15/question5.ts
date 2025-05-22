namespace QuizSystem {
    // Define interfaces
    interface QuestionType {
        qid: number;
        answer: string;
    }

    interface StudentAnswer {
        qid: number;
        answer: string;
    }

    interface StudentType {
        studentId: number;
        answers: StudentAnswer[];
        addAnswer(question: Question): void;
    }

    // Question class
    export class Question implements QuestionType {
        constructor(public qid: number, public answer: string) { }

        checkAnswer(answer: string): boolean {
            return this.answer === answer;
        }
    }

    // Student class
    export class Student implements StudentType {
        answers: StudentAnswer[] = [];

        constructor(public studentId: number) { }

        addAnswer(question: Question): void {
            this.answers.push({ qid: question.qid, answer: question.answer });
        }
    }

    // Quiz class
    export class Quiz {
        private questions: Map<number, string>;

        constructor(questions: Question[], private students: Student[]) {
            this.questions = new Map();
            // Convert array of Question objects into a Map
            for (const q of questions) {
                this.questions.set(q.qid, q.answer);
            }
        }

        scoreStudentBySid(sid: number): number {
            const student = this.students.find(s => s.studentId === sid);
            if (!student) return 0;

            let score = 0;
            for (const ans of student.answers) {
                const correctAnswer = this.questions.get(ans.qid);
                if (correctAnswer === ans.answer) {
                    score++;
                }
            }
            return score;
        }

        getAverageScore(): number {
            if (this.students.length === 0) return 0;

            const totalScore = this.students.reduce((sum, student) => {
                return sum + this.scoreStudentBySid(student.studentId);
            }, 0);

            return totalScore / this.students.length;
        }
    }

    // ===== Usage Example =====
    export function runExample() {
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
    }
}

// Run the example
QuizSystem.runExample();