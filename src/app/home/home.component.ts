import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';
import { ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';
import { LanguageService } from '../language.service';
import { CognitoService } from '../cognito.service';

interface TranslationItem {
  textContent?: { S: string };
  additionalData?: { S: string };
  additionalData1?: { S: string };
  additionalData2?: { S: string };
  additionalData3?: { S: string };
  additionalData4?: { S: string };
  additionalData5?: { S: string };
  additionalData6?: { S: string };
}

interface HomeTranslation {
  [key: string]: TranslationItem;
}

interface Translation {
  home:  HomeTranslation;
}

interface LanguageData {
  translation: Translation;
}


@Component({
  selector: 'app-home',
  template: '<img [src]="imageUrl" alt="Image" />',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',

})
export class HomeComponent implements OnInit{
  imageData: string | ArrayBuffer | null = null;
  isChatOpen: boolean = false;
  messages: { text: string; sender: 'user' | 'bot' }[] = [];
  userInput = '';
  isAuthenticated:boolean=false;
  userType :string|undefined;

  navlinks: TranslationItem = {
    additionalData: { S: '' },
    additionalData1: { S: '' },
    additionalData2: { S: '' },
    additionalData3: { S: '' },
    additionalData4: { S: '' },
  };

  herotextbox: TranslationItem = {
    additionalData: { S: '' },
    additionalData1: { S: '' },
    additionalData2: { S: '' },
    additionalData3: { S: '' },
  };

  chatbot : TranslationItem = {
    textContent: { S: '' },
    additionalData: { S: '' },
    additionalData1: { S: '' },
  };

  toggleChat() {
    console.log('chat toggled!');
    this.isChatOpen = !this.isChatOpen;
  }

  sendMessage() {
    if (this.userInput.trim() !== '') {
      this.messages.push({ text: this.userInput, sender: 'user' });



      if (this.isGreeting(this.userInput)) {
        this.messages.push({ text: 'Hello! How can I assist you?', sender: 'bot' });
      } else {


        this.messages.push({ text: 'Typing...', sender: 'bot' });
        setTimeout(() => {
          const defaultAnswer = this.getDefaultAnswer(this.userInput);
           this.messages = this.messages.filter(msg => msg.text !== 'Typing...');

          if (defaultAnswer) {
            this.messages.push({ text: defaultAnswer, sender: 'bot' });
          } else {
            this.messages.push({ text: "I'm sorry,Could you please provide a valid question?", sender: 'bot' });
            }


        }, 1000)

      }
      this.userInput = '';
    }
  }
  constructor( private cognitoService:CognitoService, private commonService: CommonService,private languageService: LanguageService, private cdr: ChangeDetectorRef) {}
  isGreeting(input: string): boolean {
    const greetings = ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening', 'hello chatbot', 'how are you?'];
    return greetings.some(greeting => input.toLowerCase().includes(greeting));
  }

  getDefaultAnswer(question: string): string | null {
    const defaultAnswers: { question: string; answer: string }[] = [
      {
        question: 'What services does Corporate Analytics provide?',
        answer: 'Corporate Analytics offers data-driven solutions for businesses, specializing in analytics, insights, and digital transformation.',
      },
      {
        question: 'What types of data does Corporate Analytics analyze?',
        answer: 'We analyze a wide range of data, including financial data, customer behavior, and market trends, to provide comprehensive insights.',
      },
      {
        question: 'How can I get support for technical issues?',
        answer: 'For technical support, please contact our Support Engineer team at support@corporateanalytics.com.',
      },
      {
        question: 'What is Corporate Analytics?',
        answer: 'Corporate Analytics is a platform that leverages data to provide insights and support decision-making for businesses.',
      },
      {
        question: 'How can I sign up for Corporate Analytics?',
        answer: 'To sign up, visit our website and click on the "Sign Up" button. Follow the instructions to create your account.',
      },
      {
        question: 'Can I integrate my existing data with Corporate Analytics?',
        answer: 'Yes, you can integrate your existing data with Corporate Analytics for a comprehensive analysis. Check our documentation for integration steps.',
      },
      {
        question: 'What benefits does analytics offer to businesses?',
        answer: 'Analytics helps businesses make informed decisions, identify trends, and optimize processes, leading to improved performance and competitiveness.',
      },
      {
        question: 'How often are analytics reports updated?',
        answer: 'Analytics reports are typically updated in real-time or at regular intervals, depending on the specific data sources and settings.',
      },
      {
        question: 'Is there a mobile app for Corporate Analytics?',
        answer: 'No, but we will offer a mobile app for Corporate Analytics in future. Then you can download it from the App Store or Google Play Store.',
      },
      {
        question: 'What does SPARThoughts do?',
        answer: 'SPARThoughts is a leading technology company specializing in innovative solutions for data analytics and business intelligence.',
      },
      {
        question: 'Tell me about SPARThoughts products.',
        answer: 'SPARThoughts offers a range of products, including advanced analytics platforms, data visualization tools, and customized solutions to meet your business needs.',
      },
    ];

    const matchingDefault = defaultAnswers.find((pair) =>
      pair.question.toLowerCase().includes(pair.question.toLowerCase())
    );

    return matchingDefault ? matchingDefault.answer : null;
  }
  
  images: any[] = [];
  ngOnInit(): void {

    this.cognitoService.isAuthenticated().then((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
      if (isAuthenticated) {
        this.cognitoService.getUser().then((attributes: any) => {
          this.userType = attributes['custom:user-type'];
          const e_id = attributes['custom:employeeId'];
          console.log('User Type:', this.userType);
          console.log('Employee id is:', e_id);
        });
      }
    });

    this.commonService.getImages().subscribe((data) => {
      this.images = data;
    });
    this.languageService.selectedLanguage$.subscribe(language =>{
      this.fetchAboutData(language);
    })
    console.log("got resp as:"+this.images);
  }

  
  getImageById(itemId: string): any {
    return this.images.find((image) => image.itemId === itemId);
  }

  fetchAboutData(language: string): void {
    this.languageService.fetchAboutData(language)
      .subscribe((data: LanguageData) => {
        if (data && data.translation && data.translation.home) {
          const translation = data.translation.home;
          this.navlinks = translation['navlinks'] || {
            // textContent: { S: '' },
            additionalData: { S: '' },
            dditionalData1: { S: '' },
            additionalData2: { S: '' },
            additionalData3: { S: '' },
            additionalData4: { S: '' },
          };

          this.herotextbox = translation['herotextbox'] || {
            // textContent: { S: '' },
            additionalData: { S: '' },
            dditionalData1: { S: '' },
            additionalData2: { S: '' },
            additionalData3: { S: '' },
            additionalData4: { S: '' },
          };
          console.log("herotextbox is",this.herotextbox)
          this.chatbot = translation['chatbot'] || {
            textContent: { S: '' },
            additionalData: { S: '' },
            dditionalData1: { S: '' },
          };

          console.log("Fetched data:", data);
        } else {
          console.error("Invalid data structure or missing translation for:", language);
        }
      },
        (error) => {
          console.error("Error fetching data:", error);
        }
      );
  }
}

 // animations: [
  //   trigger('textLeftToRight', [
  //     transition('void => *', [
  //       style({ transform: 'translateX(-100%)', opacity: 0 }),
  //       animate('2500ms ease-in-out', style({ transform: 'translateX(0)', opacity: 1 })),
  //     ]),
  //   ]),
  //   trigger('textBottomToTop', [
  //     transition('void => *', [
  //       style({ transform: 'translateY(100%)', opacity: 0 }),
  //       animate('2500ms ease-in-out', style({ transform: 'translateY(0)', opacity: 1 })),
  //     ]),
  //   ]),
  // ],
