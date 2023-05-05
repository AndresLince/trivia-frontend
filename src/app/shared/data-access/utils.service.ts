import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private http: HttpClient
  ) { }

  get token(): string {
    return localStorage.getItem('trivia_token') || '';
  }

  get headers() {
    return {
      headers: {
        'x-token': this.token
      }
    };
  }

  getIPAddress(): Observable<any> {
    return this.http.get("https://api.ipify.org/?format=json");
  }
}
