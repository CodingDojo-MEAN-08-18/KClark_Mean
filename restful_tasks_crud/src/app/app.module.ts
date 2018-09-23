import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
// import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks-list/tasks.component';
import { TasksNewComponent } from './tasks/tasks-new/tasks-new.component';
import { TaskDetailComponent } from './tasks/tasks-detail/task-detail.component';
import { FormsModule } from '@angular/forms';

import * as fromTasks from './tasks';
import { NavComponent } from './nav/nav.component';

 @NgModule({
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
   ],
   declarations: [
      AppComponent,
      TasksComponent,
      TasksNewComponent,
      TaskDetailComponent,
      ...fromTasks.components,
      NavComponent
   ],
   bootstrap: [
      AppComponent
   ]
})

export class AppModule { }
