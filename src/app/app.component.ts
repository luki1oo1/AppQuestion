import {Component, HostListener, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
interface taskQuestion {
  question: string,
  a: string,
  b: string,
  c: string,
  d: string,
  correct: string
}
@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  questionNumber = 0;
  title = 'app-quiz';
  num = 0;
  score = 0;
  form = new FormGroup({
    answer: new FormControl(''),
  });
  taskQuestions:  taskQuestion[] = [
    {
      question: "Which language runs in a web browser?",
      a: "Java",
      b: "C",
      c: "Python",
      d: "JavaScript",
      correct: "d"
    },
    {
      question: "What does CSS stand for?",
      a: "Central Style Sheets",
      b: "Cascading Style Sheets",
      c: "Cascading Simple Sheets",
      d: "Cars SUVs Sailboats",
      correct: "b"
    },
    {
      question: "What does HTML stand for?",
      a: "Hypertext Markup Language",
      b: "Hypertext Markdown Language",
      c: "Hyperloop Machine Language",
      d: "Helicopters Terminals Motorboats Lamborginis",
      correct: "a"
    },
    {
      question: "What year was JavaScript launched?",
      a: "1996",
      b: "1995",
      c: "1994",
      d: "none of the above",
      correct: "b"
    }
  ];
  valueProg = 100 / this.taskQuestions.length;
  incrementNumber() {
    this.num++
  }

  onSubmit() {
    this.valueProg += 0;
    console.log(this.num, this.questionNumber)
    if (this.form.value.answer === this.taskQuestions[this.questionNumber].correct) {
      this.incrementNumber();
      this.questionNumber++;
      this.score++;
      this.valueProg += 100 / this.taskQuestions.length;
      if (this.questionNumber > -1) {
        console.log(`score ${this.score}/${this.taskQuestions.length}`);
        console.log(this.valueProg);
      }
    } else {
      this.incrementNumber();
      this.questionNumber++;
      this.valueProg += 100 / this.taskQuestions.length;

    }
  }

  playAgain() {
    this.questionNumber = 0;
    this.score = 0;
    this.num = 0;
  }
}
