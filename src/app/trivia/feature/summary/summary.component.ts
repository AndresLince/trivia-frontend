import { Component } from '@angular/core';
import { TriviaService } from '../../data-access/trivia.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  public score: number = 0;

  constructor(
    public triviaService: TriviaService
  ) {
    this.triviaService.getSummary().subscribe({
      next: (response) => {
        this.score = response.score;
      },
    })
  }
}
