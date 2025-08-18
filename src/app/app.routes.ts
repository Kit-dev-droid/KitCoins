import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./home/home-component/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./home/dashboard-component/dashboard-component').then(m => m.DashboardComponent)
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
        path: 'login',
        loadComponent: () => import('./home/auth-services/login-component').then(m => m.LoginComponent)
        
    },
    {
        path: '',
        redirectTo: "home",
        pathMatch: 'full',
    }
    
];
