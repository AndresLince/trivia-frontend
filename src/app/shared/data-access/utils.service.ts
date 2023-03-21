import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

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
}
