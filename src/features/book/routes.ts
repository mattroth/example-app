import { Routes } from '@angular/router';

import { BookExistsGuard } from './guards/book-exists';
import { FindBookPageComponent } from './containers/find-book-page';
import { ViewBookPageComponent } from './containers/view-book-page';

export const routes: Routes = [
  {
    path: 'find',
    component: FindBookPageComponent
  },
  {
    path: ':id',
    canActivate: [ BookExistsGuard ],
    component: ViewBookPageComponent
  }
];
