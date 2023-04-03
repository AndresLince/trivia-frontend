import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/shared/data-access/config.service';
import { QuestionCategory } from './questionCategory.interface';
import { UtilsService } from 'src/app/shared/data-access/utils.service';

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
    return this.http.post(`${this.configService.getConfig('apiUrl') }/trivia`, formData, this.utilsService.headers);
  }
}
