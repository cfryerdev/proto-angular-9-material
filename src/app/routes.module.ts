import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pages } from './pages.module';

const routes: Routes = [
  { path: '', component: Pages.DashboardPage },
  { path: 'search', component: Pages.SearchPage },
  { path: 'account',
    children: [
      { path: '', component: Pages.AccountPage },
      { path: 'details', component: Pages.AccountDetailsPage },
      { path: 'times', component: Pages.AccountTimesPage }
    ]
  },
  { path: 'items',
    children: [
      { path: '', component: Pages.ItemsPage },
      { path: ':id', component: Pages.AddEditItemPage }
    ]
  },
  { path: 'custom/:id', component: Pages.AddEditCustomPage },
  { path: '**', component: Pages.NotFoundPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }