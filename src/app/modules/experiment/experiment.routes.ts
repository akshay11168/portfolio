import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'masking',
        loadComponent: () => import('./masking/masking.component').then((x) => x.MaskingComponent),
    },
    {
        path: 'mouse-aura',
        loadComponent: () => import('./mouse-aura/mouse-aura.component').then((x) => x.MouseAuraComponent),
    }
];
