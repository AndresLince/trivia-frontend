import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/shared/data-access/config.service';
import { UserSignUp } from './user.interfaces';
import { UtilsService } from 'src/app/shared/data-access/utils.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private configService: ConfigService,
    private utilsService: UtilsService
  ) { }

  signUp(formData: UserSignUp): Observable<any> {
    return this.http.post(`${this.configService.getConfig('apiUrl') }/auth/signup`, formData).pipe(
      tap((resp: any) => {
        localStorage.setItem('trivia_token', resp.token);
      })
    );
  }

  validateToken() {
    return this.http.get(`${this.configService.getConfig('apiUrl')}/auth/renew`, this.utilsService.headers).pipe(
      map((resp: any) => {
        localStorage.setItem('trivia_token', resp.token);
        return true;
      }),
      catchError(error =>
        of(false)
      )
    );
  }
}
