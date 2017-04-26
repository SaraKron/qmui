import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../../components/login/login.component';

import { AuthGuard } from '../../guards/auth.guard';
import { AuthService } from '../../services/auth.service';

const loginRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthService,
    AuthGuard,
  ]
})
export class LoginRoutingModule { }
