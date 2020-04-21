import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from './pages.module';

import { DashboardPage } from './pages/dashboard/dashboard.component';
import { NotFoundPage } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: DashboardPage },
  // { path: 'items',
  //   children: [
  //     { path: '', component: ListItemPage },
  //     { path: ':id', component: EditItemPage }
  //   ]
  // },
  { path: '**', component: NotFoundPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }