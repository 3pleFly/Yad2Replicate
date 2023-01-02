import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { logoSvg } from 'src/assets/images/images';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  logoSvg: string = logoSvg;
  forSaleListingRoute: string = '/realestate/forsale';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  openSidebar() {
    if (this.authService.modalSubject$) this.authService.nextModalValue(false);
    this.authService.nextModalValue(true);
  }

  get isBackArrowActive() {
    if (this.currentRoute === this.forSaleListingRoute) return false;
    return true;
  }

  get currentRoute() {
    return this.router.url;
  }
}
