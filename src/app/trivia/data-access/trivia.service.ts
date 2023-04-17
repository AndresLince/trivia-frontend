import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ConfigService } from 'src/app/shared/data-access/config.service';
import { QuestionCategory } from './questionCategory.interface';
import { UtilsService } from 'src/app/shared/data-access/utils.service';
import { SetSelectedAnswer } from './set-selected-answer.model';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {

  constructor(
    private configService: ConfigService,
    private http: HttpClient,
    private utilsService: UtilsService,
  ) { }

  create(formData: QuestionCategory): Observable<any> {
    return this.http.post(`${this.configService.getConfig('apiUrl')}/trivia`, formData, this.utilsService.headers).pipe(
      tap((resp: any) => {
        localStorage.setItem('idTrivia', resp.idTrivia);
      })
    );
  }

  getIdTrivia(): string {
    return localStorage.getItem('idTrivia') || '';
  }

  getQuestion(): Observable<any> {
    return this.http.get(`${this.configService.getConfig('apiUrl')}/trivia/question/${ this.getIdTrivia() }`, this.utilsService.headers);
  }

  setSelectedAnswer(formData: SetSelectedAnswer): Observable<any> {
    return this.http.put(`${this.configService.getConfig('apiUrl')}/trivia/answer`, formData, this.utilsService.headers);
  }

  getSummary(): Observable<any> {
    return this.http.get(`${this.configService.getConfig('apiUrl')}/trivia/summary/${this.getIdTrivia() }`, this.utilsService.headers);
  }
}
