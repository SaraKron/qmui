import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailViewComponent } from '../../components/detail-view/detail-view.component';
import { CanDeactivateGuard } from '../../guards/can-deactivate-guard';

import { ProblemsResolverService } from '../../services/problems-resolver.service';

const detailViewRoutes: Routes = [
  {
    path: 'detail/:id',
    component: DetailViewComponent,
    canDeactivate: [CanDeactivateGuard],
    resolve: {
      problem: ProblemsResolverService
    }
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(detailViewRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ProblemsResolverService
  ]
})
export class DetailViewRoutingModule { }
