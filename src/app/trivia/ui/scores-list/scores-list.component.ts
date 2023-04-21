import { Component, Input, OnInit } from '@angular/core';
import { Score } from '../../data-access/scores.interface';

@Component({
  selector: 'app-scores-list',
  templateUrl: './scores-list.component.html',
  styleUrls: ['./scores-list.component.css']
})
export class ScoresListComponent{
  @Input() scores: Score[] = [];
}
