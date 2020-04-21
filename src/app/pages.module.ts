import { NgModule } from '@angular/core';
import { DashboardPage } from './pages/dashboard/dashboard.component';
import { NotFoundPage } from './pages/not-found/not-found.component';

const pages =  [
  DashboardPage,
  NotFoundPage
];

@NgModule({ exports: pages })
class PagesModule {};

export default { PagesModule, pages };
