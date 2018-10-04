import { NgModule } from '@angular/core';

import { BrandComponent } from './product/brand/brand.component';
import { CategoryComponent } from './product/category/category.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';

import { AuthorComponent } from './review/author/author.component';
import { AllComponent } from './review/all/all.component';
import { ReviewDetailsComponent } from './review/review-details/review-details.component';

import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  { path: 'products', component: ProductComponent, children: [
    { path: 'details/:id', component: ProductDetailsComponent},
    { path: 'brand/:brand', component: BrandComponent },
    { path: 'category/:cat', component: CategoryComponent }]
  },
  { path: 'reviews', component: ReviewComponent, children: [
    { path: 'details/:id', component: ReviewDetailsComponent },
    { path: 'author/:id', component: AuthorComponent },
    { path: 'all/:id', component: AllComponent }]
  },
  { path: '**', redirectTo: '/' },
  { path: '', pathMatch: 'full', redirectTo: '/' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
