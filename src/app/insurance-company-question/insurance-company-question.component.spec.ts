import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceCompanyQuestionComponent } from './insurance-company-question.component';

describe('InsuranceCompanyQuestionComponent', () => {
  let component: InsuranceCompanyQuestionComponent;
  let fixture: ComponentFixture<InsuranceCompanyQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsuranceCompanyQuestionComponent]
    });
    fixture = TestBed.createComponent(InsuranceCompanyQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
