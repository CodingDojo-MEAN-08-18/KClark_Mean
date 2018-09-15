import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
 import { AppRoutingModule } from './/app-routing.module';
import { RouterModule, Routes } from '@angular/router';
 import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';

 @NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    TasksComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
