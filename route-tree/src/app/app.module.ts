import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { RouteTreeService } from './route-tree.service';

import { BrandComponent } from './product/brand/brand.component';
import { CategoryComponent } from './product/category/category.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductComponent } from './product/product.component';

import { AuthorComponent } from './review/author/author.component';
import { AllComponent } from './review/all/all.component';
import { ReviewDetailsComponent } from './review/review-details/review-details.component';
import { ReviewComponent } from './review/review.component';


@NgModule({
   declarations: [
      AppComponent,
      ProductComponent,
      ReviewComponent,
      BrandComponent,
      AllComponent,
      ReviewDetailsComponent,
      CategoryComponent,
      AuthorComponent,
      ProductDetailsComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [RouteTreeService],
   bootstrap: [ AppComponent ]
})
export class AppModule { }
