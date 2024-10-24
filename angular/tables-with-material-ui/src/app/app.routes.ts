import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'table',
    loadComponent: () => import('./components/table/table.component').then(c => c.TableComponent),
    title: 'Tabela utilizando material ui'
  }
];
