import { Routes } from '@angular/router';
import { HomeComponent } from './compoments/home/home.component';
import { AboutComponent } from './compoments/about/about.component';
import { NotFoundComponent } from './compoments/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'about', component: AboutComponent
    },
    {
        path: '**', component: NotFoundComponent
    }
];
