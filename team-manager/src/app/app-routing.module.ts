import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import * as fromTeams from './teams/';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'players',

    children: [
      {
        path: 'list',
        component: fromTeams.TeamListComponent,
      },
      {
        path: 'new',
        component: fromTeams.BookNewComponent,
      },
    ],
  },
  {
    path: 'status',
    children: [
      {
        path: 'game',
        children: [
          {
            path: '1',
            component: fromTeams.PlayerStatusComponent
          },
          {
            path: '2',
            component: fromTeams.PlayerStatusComponent
          },
          {
            path: '3',
            component: fromTeams.PlayerStatusComponent
          },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
