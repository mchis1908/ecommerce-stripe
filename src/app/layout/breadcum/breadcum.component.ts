import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcum',
  templateUrl: './breadcum.component.html',
  styleUrls: ['./breadcum.component.scss']
})
export class BreadcumComponent implements OnInit {
  breadcrumbs: Array<{ label: string, url: string }> = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.breadcrumbs = this.generateBreadcrumbs(this.router.url);
    console.log(this.breadcrumbs);
  }

  generateBreadcrumbs(route: string) {
    // Split the route into segments
    const segments = route.split('/').filter(segment => segment);
    
    // Always start with Home
    const breadcrumbs = [{ label: 'Home', url: '/' }];

    // Append other segments
    segments.forEach((segment, index) => {
      const url = '/' + segments.slice(0, index + 1).join('/');
      breadcrumbs.push({ label: this.capitalize(segment), url });
    });

    return breadcrumbs;
  }

  // Utility function to capitalize first letter of each breadcrumb label
  capitalize(segment: string) {
    return segment.charAt(0).toUpperCase() + segment.slice(1);
  }
}
