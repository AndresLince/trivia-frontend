import { Component } from '@angular/core';
import { TriviaService } from '../../data-access/trivia.service';
import { Router } from '@angular/router';
import { Score } from '../../data-access/scores.interface';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  public score: number = 0;
  public scores: Score[] = [];

  constructor(
    public triviaService: TriviaService,
    private router: Router,
  ) {
    this.triviaService.getSummary().subscribe({
      next: (response) => {
        this.scores = response.scores;
        this.score = response.score;
      },
    })
  }

  handleOnClick() {
    this.router.navigateByUrl('trivia/category-question');
  }
}
