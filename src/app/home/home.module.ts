import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';
import { ShopComponent } from '../shop/shop.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
];

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule.forChild(routes),
  ]
})
export class HomeModule { }
