import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public environmentVariables: any = {};
  constructor() {
    const environmentVariables = Object.entries(environment);

    environmentVariables.forEach((element) => {
      const key = element[0];
      const value = element[1];
      this.environmentVariables[key] = value;
    });
  }

  getConfig(key: string): string {
    return this.environmentVariables[key] || '';
  }
}
