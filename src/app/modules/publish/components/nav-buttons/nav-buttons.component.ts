import { Component, EventEmitter, Input, Output } from '@angular/core';
import { of } from 'rxjs';
import { StepsService } from '../../services/steps.service';

@Component({
  selector: 'app-nav-buttons',
  templateUrl: './nav-buttons.component.html',
  styleUrls: ['./nav-buttons.component.scss'],
})
export class NavButtonsComponent {
  @Input() disableNextStep: boolean = false;

  constructor(private stepsService: StepsService) {}

  nextStep() {
    if (!this.disableNextStep) this.stepsService.nextStep();
  }

  prevStep() {
    this.stepsService.prevStep();
  }

  get isMobileUser(): boolean {
    return screen.width < 880;
  }
}
