
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from 'src/question.model';
@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent {
  questions: Question[] = [];
  formData: any = {};
  radioOptions: any = {}; 

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('assets/questions.json').subscribe(data => {
      this.questions = data.questions;
      this.initializeFormData();
      this.initializeRadioOptions();
    });
  }

  initializeFormData(): void {
    this.questions.forEach(question => {
      this.formData[question.text] = {};
      question.options.forEach(option => {
        this.formData[question.text][option.label] = '';
      });
    });
  }

  initializeRadioOptions(): void {
    this.questions.forEach(question => {
      this.radioOptions[question.text] = question.options
        .filter(option => option.type === 'radio')
        .map(option => option.label);
    });
  }

  submitForm(): void {
    console.log(this.formData);
  }

}
