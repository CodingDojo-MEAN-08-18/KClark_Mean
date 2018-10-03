import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import * as fromAuthors from './authors';
import { environment } from '../environments/environment';

const enableTracing = true && !environment.production;

const routes: Routes = [
  {
    path: '',
    component: fromAuthors.AuthorListComponent,

    children: [
      {
        path: 'new',
        component: fromAuthors.AuthorNewComponent,
      },

      {
        path: ':author_id',
        component: fromAuthors.AuthorDetailComponent,
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
  declarations: [RouterModule]
})
export class AppRoutingModule { }
