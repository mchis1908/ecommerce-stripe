import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule
  ],
  declarations: [GalleryComponent]
})
export class GalleryModule { }
