import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [];

@Component({
  standalone: true,
  selector: 'app-mobile-authentication-page',
  templateUrl: './mobile-authentication-page.component.html',
  styleUrls: ['./mobile-authentication-page.component.scss'],
  imports: [CommonModule, SharedModule, RouterModule],
})
export class MobileAuthenticationPageComponent {

  constructor(private location: Location, private router: Router) {}

  goBack() {
    this.location.back();
  }

  get currentRoute(): string {
    return this.router.url;
  }

  get registrationMode(): boolean {
    return this.currentRoute === '/auth/login' ? false : true;
  }
}
