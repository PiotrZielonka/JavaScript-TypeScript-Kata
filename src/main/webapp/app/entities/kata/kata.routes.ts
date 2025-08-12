import { Routes } from '@angular/router';

const kataRoute: Routes = [
  {
    path: '',
    loadComponent: () => import('./list/kata.component').then(m => m.KataComponent),
    canActivate: [],
  },
];

export default kataRoute;
