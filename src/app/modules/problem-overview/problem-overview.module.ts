import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewComponent } from '../../components/overview/overview.component';
import { TableOverviewComponent } from '../../components/table-overview/table-overview.component';
import { PreviewComponent } from '../../components/preview/preview.component';

import { OrderByPipe } from '../../filters/order-by.pipe';
import { SearchPipe } from '../../filters/search.pipe';

import { ProblemOverviewRoutingModule } from './problem-overview-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProblemOverviewRoutingModule
  ],
  declarations: [
    OverviewComponent,
    TableOverviewComponent,
    PreviewComponent,
    OrderByPipe,
    SearchPipe
  ]
})
export class ProblemOverviewModule { }
