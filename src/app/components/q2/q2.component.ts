import { Component } from '@angular/core';

@Component({
  selector: 'app-q2',
  templateUrl: './q2.component.html',
  styleUrls: ['./q2.component.scss']
})
export class Q2Component {
  currentQuestion: string = 'dob';
  back:string='gender';
  back2:string='medical_Condition';
  back3:string='smoke';
  back4:string='surgeries';

  dob: string = '';
  gender: string = ''
  medical_Condition: string ='' ;
  smoke: string ='';
  surgeries: string ='';

  showNextQuestion(nextQuestion: string): void {
    this.currentQuestion = nextQuestion;
  }
  showPrevQuestion(prevQuestion: string): void {
    this.currentQuestion = prevQuestion;
}
}
