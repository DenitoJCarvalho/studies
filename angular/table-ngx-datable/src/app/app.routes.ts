import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/table',
    pathMatch: 'full'
  },
  {
    path: 'table',
    loadComponent: () => import('./components/table/table.component').then(c => c.TableComponent),
    title: 'Tabela com NGX-Datable',
    pathMatch: 'full'
  }
];
