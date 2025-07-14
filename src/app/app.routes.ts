import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./home/home-component/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'feature',
        loadComponent: () => import('./home/feature-component/feature-component').then(m => m.FeatureComponent)
    },
    {
        path: 'contact',
        loadComponent: () => import('./home/contact-component/contact-component').then(m => m.ContactComponent)
    },
    {
        path: 'registration',
        loadComponent: () => import('./home/registration-component/registration-component').then(m => m.RegistrationComponent)
        
    },
    {
        path: '',
        redirectTo: "home",
        pathMatch: 'full',
    }
    
];
