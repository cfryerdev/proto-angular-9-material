import { NgModule } from '@angular/core';
import { DashboardPage } from './pages/dashboard/dashboard.component';
import { NotFoundPage } from './pages/not-found/not-found.component';

const Pages =  [
  DashboardPage,
  NotFoundPage
];

@NgModule({ exports: Pages })
export class PagesModule {};

// export default Pages;
