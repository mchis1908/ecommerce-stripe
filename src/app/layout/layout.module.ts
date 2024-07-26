import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component'
import { BreadcumComponent } from './breadcum/breadcum.component';
import { FooterComponent } from '../components/footer/footer.component';
import { LayoutComponent } from './layout.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './../home/home.component';
import { ShopComponent } from './../shop/shop.component';
import { BlogComponent } from '../blog/blog.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { ContactComponent } from '../contact/contact.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'shop', component: ShopComponent,
  },
  {
    path: 'blog', component: BlogComponent,
  },
  {
    path: 'gallery', component: GalleryComponent,
  },
  {
    path: 'contact', component: ContactComponent,
  }
];

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    BreadcumComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
