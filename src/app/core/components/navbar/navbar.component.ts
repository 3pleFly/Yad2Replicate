import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { logoSvg } from 'src/assets/images/images';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  logoSvg: string = logoSvg;

  constructor(private authService: AuthService) {}

  openSidebar() {
    if (this.authService.modalSubject$) this.authService.nextModalValue(false);
    this.authService.nextModalValue(true);
  }
}
