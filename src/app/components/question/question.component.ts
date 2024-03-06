import { Component } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  currentQuestion: string = 'name'; 
  back: string = ''; 

 
  firstName: string = '';
  lastName: string = '';
  dob: string = '';
  gender: string = '';
  medical_Condition: string = '';
  smoke: string = '';
  surgeries: string = '';

  
  showNextQuestion(nextQuestion: string): void {
    
    this.back = this.currentQuestion;

    this.currentQuestion = nextQuestion;
  }

 
  showPrevQuestion(prevQuestion: string): void {
   
    this.currentQuestion = prevQuestion;
   
    this.back = '';
  }
}
