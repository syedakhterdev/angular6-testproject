import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  SearchComponent,
  SearchResultsComponent,
  ProductDetailComponent
} from './search';
import { NotFoundComponent } from './core';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  },
  { path: 'search', component: SearchComponent },
  { path: 'results/:category', component: SearchResultsComponent },
  { path: 'results/:category/item/:id', component: ProductDetailComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
