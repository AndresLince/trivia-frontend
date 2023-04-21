import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryRoutingModule } from './summary-routing.module';
import { SummaryComponent } from './summary.component';
import { ScoresListComponent } from '../../ui/scores-list/scores-list.component';


@NgModule({
  declarations: [
    SummaryComponent,
    ScoresListComponent
  ],
  imports: [
    CommonModule,
    SummaryRoutingModule
  ]
})
export class SummaryModule { }
