import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
