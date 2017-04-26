import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../../guards/auth.guard';
import { AdminComponent } from '../../components/admin/admin.component';
import { AdminMasterDataComponent } from '../../components/admin/admin-master-data/admin-master-data.component';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'masterData',
        canActivateChild: [AuthGuard],
        component: AdminMasterDataComponent
      },
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
