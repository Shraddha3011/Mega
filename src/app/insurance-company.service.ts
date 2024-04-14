import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InsuranceCompanyService {

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<any> {
    return this.http.get<any>('assets/insurance-company.json');
}
}
