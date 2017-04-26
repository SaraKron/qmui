import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailViewComponent } from '../../components/detail-view/detail-view.component';
import { HighlightBackgroundDirective } from '../../directives/highlight-background.directive';
import { DetailViewRoutingModule } from './detail-view-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DetailViewRoutingModule
  ],
  declarations: [
    DetailViewComponent,
    HighlightBackgroundDirective
  ]
})
export class DetailViewModule { }
