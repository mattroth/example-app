import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '../../components';
import { BookComponentsModule } from './components';
import { BookExistsGuard } from './guards/book-exists';

import { FindBookPageComponent } from './containers/find-book-page';
import { ViewBookPageComponent } from './containers/view-book-page';
import { SelectedBookPageComponent } from './containers/selected-book-page';

import { routes } from './routes';

@NgModule({
  imports: [
    CommonModule,

    BookComponentsModule,
    ComponentsModule,

    RouterModule.forChild(routes),
  ],
  declarations: [
    FindBookPageComponent,
    ViewBookPageComponent,
    SelectedBookPageComponent,
  ],
  providers: [
    BookExistsGuard
  ]
})
export class BookModule { }
