import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, RouterOutlet } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { OverviewComponent } from './components/overview/overview.component';
import { DetailViewComponent } from './components/detail-view/detail-view.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'OverviewComponent',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: DetailViewComponent,
    },
    {
        path: 'admin',
        loadChildren: 'app/modules/admin/admin.module#AdminModule',
        canLoad: [ AuthGuard ]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {   path: '**',
        component: NotFoundComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes,  { preloadingStrategy: SelectivePreloadingStrategy });
