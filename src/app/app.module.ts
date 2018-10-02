import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule, PaginationModule } from 'ngx-bootstrap';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatAutocompleteModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import {
  SearchComponent,
  SearchResultsComponent,
  ProductDetailComponent
} from './search';
import { NotFoundComponent } from './core';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchResultsComponent,
    ProductDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatAutocompleteModule,
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
