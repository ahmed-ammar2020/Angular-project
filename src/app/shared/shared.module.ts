import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { DividerComponent } from './divider/divider.component';



@NgModule({
  declarations: [
    TitleComponent,
    DividerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitleComponent
  ]
})
export class SharedModule { }
