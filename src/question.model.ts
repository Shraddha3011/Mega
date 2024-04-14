// question.model.ts
export interface QuestionOption {
    label: string;
    type: string;
  }
  
  export interface Question {
    text: string;
    options: QuestionOption[];
  }
  