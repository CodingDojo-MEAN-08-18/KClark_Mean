import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import * as fromAuthors from './authors';
import * as fromServices from './services';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';

@NgModule({
   declarations: [
      AppComponent,
      ...fromAuthors.components,
      NavComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      AppRoutingModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
