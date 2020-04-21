import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pages } from './pages.module';

const routes: Routes = [
  { path: '', component: Pages.DashboardPage },
  { path: 'items',
    children: [
      { path: '', component: Pages.ItemsPage },
      //{ path: ':id', component: Pages.ItemsAddEditPage }
    ]
  },
  { path: '**', component: Pages.NotFoundPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }