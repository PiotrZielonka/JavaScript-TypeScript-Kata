import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authority',
    data: { pageTitle: 'javascriptTypescriptKataApp.adminAuthority.home.title' },
    loadChildren: () => import('./admin/authority/authority.routes'),
  },
  {
    path: 'kata',
    data: { pageTitle: 'javascriptTypescriptKataApp.kata.home.title' },
    loadChildren: () => import('./kata/kata.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
