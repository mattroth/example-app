import { Routes } from '@angular/router';

import { CollectionPageComponent } from './containers/collection-page';
import { NotFoundPageComponent } from './containers/not-found-page';

declare var System: any;
declare var PROD: any;

function loadBookModule() {
  if (PROD) {
    return System.import('./features/book/book.module.ngfactory').then((module: any) => module.BookModuleNgFactory);
  } else {
    return System.import('./features/book/book.module').then((module: any) => module.BookModule);
  }
}

export const routes: Routes = [
  {
    path: '',
    component: CollectionPageComponent
  },
  {
    path: 'book',
    loadChildren: loadBookModule
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];
