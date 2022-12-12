import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sidebar-modal',
  templateUrl: './sidebar-modal.component.html',
  styleUrls: ['./sidebar-modal.component.scss'],
})
export class SidebarModalComponent implements OnInit {
  modal!: Observable<boolean>;

  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.modal = this.authService.modalSubject$;
  }

  closeSidemenu(event: MouseEvent) {
    event.stopPropagation();
    this.authService.nextModalValue(false);
  }

  stopPropogation(e: MouseEvent) {
    e.stopPropagation();
  }
}
