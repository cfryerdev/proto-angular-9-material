import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { RootComponent } from './pages/root.component';
import { AppRoutingModule } from './routes.module'
import { MaterialModule } from './material.module';
import { DashboardPage } from './pages/dashboard/dashboard.component';
import { NotFoundPage } from './pages/not-found/not-found.component';

import Pages from './pages.module';
console.log(Pages)

@NgModule({
  imports: [
    AppRoutingModule,
    RouterModule,
    BrowserModule, 
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  entryComponents: [RootComponent],
  declarations: [
    RootComponent,
    DashboardPage,
    NotFoundPage
  ],
  bootstrap: [RootComponent],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ]
})
export class AppModule {}