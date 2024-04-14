import { Component } from '@angular/core';
import { InsuranceCompanyService } from '../insurance-company.service';

@Component({
  selector: 'app-insurance-company-question',
  templateUrl: './insurance-company-question.component.html',
  styleUrls: ['./insurance-company-question.component.scss']
})
export class InsuranceCompanyQuestionComponent {
  categories: any[] = [];
  currentCategoryIndex = 0;

  constructor(private questionService: InsuranceCompanyService) { }

  ngOnInit(): void {
    this.questionService.getQuestions().subscribe(data => {
      this.categories = Object.keys(data).map(category => ({
        category,
        questions: data[category]
      }));
    });
  }

  nextCategory(): void {
    if (this.currentCategoryIndex < this.categories.length) {
      this.currentCategoryIndex++;
    }
  }

  previousCategory(): void {
    if (this.currentCategoryIndex > 0) {
      this.currentCategoryIndex--;
    }
  }

  submitAnswers(): void {
    console.log(this.categories); // You can handle the submitted answers here
  }
}
