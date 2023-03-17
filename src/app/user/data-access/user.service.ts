import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/shared/data-access/config.service';
import { UserSignUp } from './user.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private configService: ConfigService
  ) { }

  signUp(formData: UserSignUp): Observable<any> {
    return this.http.post(`${this.configService.getConfig('apiUrl') }/auth/signup`, formData).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
      })
    );
  }
}
