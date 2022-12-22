import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sidebar-modal',
  templateUrl: './sidebar-modal.component.html',
  styleUrls: ['./sidebar-modal.component.scss'],
})
export class SidebarModalComponent implements OnInit {
  modal!: Observable<boolean>;

  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.modal = this.authService.modalSubject$;
  }

  closeSidemenu(event: Event) {
    event.stopPropagation();
    this.authService.nextModalValue(false);
  }

  stopPropogation(e: Event) {
    e.stopPropagation();
  }

  navigateTo(route: string ,e: Event) {
    this.router.navigate([route]);
    this.closeSidemenu(e);
  }
}
