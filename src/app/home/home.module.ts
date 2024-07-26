import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from '../components/banner/banner.component';
import { LayoutModule } from '../layout/layout.module';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule.forChild(routes),
  ]
})
export class HomeModule { }
