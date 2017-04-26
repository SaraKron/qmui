import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { routing } from './app.routing';
import { AdminModule } from './modules/admin/admin.module';
import { DetailViewModule } from './modules/detail-view/detail-view.module';
import { LoginModule } from './modules/login/login.module';
import { ProblemOverviewModule } from './modules/problem-overview/problem-overview.module';

import { CanDeactivateGuard } from './guards/can-deactivate-guard';
import { ProblemsService } from './services/problems.service';

import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
import { BreadcrumbDirective } from './directives/breadcrumb.directive';


@NgModule({
  imports: [
    routing,
    AdminModule,
    DetailViewModule,
    LoginModule,
    ProblemOverviewModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    NavigationComponent,
    NotFoundComponent,
    BreadcrumbDirective,
  ],
  providers: [
    CanDeactivateGuard,
    ProblemsService,
    SelectivePreloadingStrategy
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
