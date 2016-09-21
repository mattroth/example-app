import { NgModule } from '@angular/core';

import { AddCommasPipe } from './add-commas';
import { EllipsisPipe } from './ellipsis';



@NgModule({
  declarations: [
    AddCommasPipe,
    EllipsisPipe,
  ],
  exports: [
    AddCommasPipe,
    EllipsisPipe,
  ]
})
export class PipesModule { }