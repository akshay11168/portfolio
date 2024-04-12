import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'login',
        loadComponent: () => import('./modules/login/login.component').then((x) => x.LoginComponent),
    },
    {
        path : 'experiment',
        loadChildren : ()=> import('./modules/experiment/experiment.routes').then((x)=> x.routes)
    },
    // {
    //     path: 'experiment/masking',
    //     loadComponent: () => import('./modules/experiment/masking/masking.component').then((x) => x.MaskingComponent),
    // },
    // {
    //     path: 'experiment/mouse-aura',
    //     loadComponent: () => import('./modules/experiment/mouse-aura/mouse-aura.component').then((x) => x.MouseAuraComponent),
    // },
    {
        path: '**',
        loadComponent: () => import('./modules/home/home.component').then((x) => x.HomeComponent),
    },
];
