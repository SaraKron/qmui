import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from '../../components/admin/admin.component';
import { AdminMasterDataComponent } from '../../components/admin/admin-master-data/admin-master-data.component';

import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    AdminMasterDataComponent
  ]
})
export class AdminModule { }
