import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as fromTasks from './tasks';
import { environment } from '../environments/environment';

const enableTracing = true && !environment.production;

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full',
  },
  {
    path: 'tasks',
    children: [
      {
        path: '',
        component: fromTasks.TasksComponent,
      },
      {
        path: 'new',
        component: fromTasks.TasksNewComponent,
      },
      {
        path: ':taskId',
        component: fromTasks.TaskDetailComponent
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing,
    }),
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
