import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { ConfigService } from 'src/app/shared/data-access/config.service';
import { UtilsService } from 'src/app/shared/data-access/utils.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryQuestionService {

  constructor(
    private configService: ConfigService,
    private http: HttpClient,
    private utilsService: UtilsService
  ) { }

  getAll(): Observable<any> {
    return this.http.get(`${this.configService.getConfig('apiUrl')}/question-category`, this.utilsService.headers);
  }
}
