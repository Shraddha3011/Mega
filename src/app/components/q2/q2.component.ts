import { Component } from '@angular/core';

@Component({
  selector: 'app-q2',
  templateUrl: './q2.component.html',
  styleUrls: ['./q2.component.scss']
})
export class Q2Component {
  currentQuestion: string = 'dob';
  back:string='gender';
  dob: string = '';
  gender: string = '';


  showNextQuestion(nextQuestion: string): void {
    this.currentQuestion = nextQuestion;
  }
  showPrevQuestion(prevQuestion: string): void {
    this.currentQuestion = prevQuestion;
}
}
