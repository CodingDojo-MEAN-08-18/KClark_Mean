import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import * as fromNotes from './notes';

import { environment } from '../environments/environment';
const enableTracing = false && !environment.production;

const routes: Routes = [
  {
    path: '',
    redirectTo: 'notes',
    pathMatch: 'full',
  },
  {
    path: 'notes',

    children: [
      {
        path: '',
        component: fromNotes.NoteListComponent,
      },
      {
        path: 'new',
        component: fromNotes.NoteNewComponent,
      }
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing,
    }),
  ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
