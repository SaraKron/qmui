import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OverviewComponent } from '../../components/overview/overview.component';

const problemOverviewRoutes: Routes = [
  {
    path: '',
    component: OverviewComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(problemOverviewRoutes)
  ],
    exports: [
    RouterModule
  ]
})
export class ProblemOverviewRoutingModule { }
