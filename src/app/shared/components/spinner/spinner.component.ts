import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpinnerService } from '../../../core/services/spinner.service';

@Component({
  selector: 'app-spinner',
  template: `
    <ng-template [ngIf]="!spinnerType">
      <div class="wrapper" [ngClass]="{ active: this.showSpinner | async }">
        <span class="loader"></span>
      </div>
    </ng-template>

    <ng-template [ngIf]="spinnerType === 1">
      <div class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
      </div>
    </ng-template>
  `,
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  showSpinner!: Observable<boolean>;
  @Input() spinnerType!: number;

  constructor(private spinnerService: SpinnerService) {}

  ngOnInit(): void {
    this.showSpinner = this.spinnerService.spinner;
  }
}
