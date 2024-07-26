import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public pageSelector: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.pageSelector= this.router.url;
  }
  
}
