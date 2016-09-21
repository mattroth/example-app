import { ModuleWithProviders } from '@angular/core';
import { MdCoreModule } from '@angular2-material/core';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdIconModule } from '@angular2-material/icon';
import { MdInputModule } from '@angular2-material/input';
import { MdListModule } from '@angular2-material/list';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdProgressCircleModule } from '@angular2-material/progress-circle';


export const MATERIAL_IMPORTS = [
  MdCoreModule.forRoot(),
  MdButtonModule.forRoot(),
  MdCardModule.forRoot(),
  MdIconModule.forRoot(),
  MdInputModule.forRoot(),
  MdListModule.forRoot(),
  MdSidenavModule.forRoot(),
  MdToolbarModule.forRoot(),
  MdProgressCircleModule.forRoot(),
];