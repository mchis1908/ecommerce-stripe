import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule
  ],
  declarations: [BlogComponent]
})
export class BlogModule { }
