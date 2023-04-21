import { Component, Input, OnInit } from '@angular/core';
import { Score } from '../../data-access/scores.interface';

@Component({
  selector: 'app-scores-list',
  templateUrl: './scores-list.component.html',
  styleUrls: ['./scores-list.component.css']
})
export class ScoresListComponent{
  @Input() scores: Score[] = [];
  @Input() currentScore: number = 0;

  validateCurrentScore(score: number): boolean {
    return score === this.currentScore;
  }
}
