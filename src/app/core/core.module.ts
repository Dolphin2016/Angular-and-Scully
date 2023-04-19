import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {RouterLink, RouterLinkActive, RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterLinkActive,
    RouterLink,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
