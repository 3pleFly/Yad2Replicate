import { Component } from '@angular/core';
import { SevenstepService } from '../../services/sevenstep.service';

@Component({
  selector: 'app-step4-view',
  templateUrl: './step4-view.component.html',
  styleUrls: ['./step4-view.component.scss']
})
export class Step4ViewComponent {

  constructor(private stepsService: SevenstepService) {}

  nextStep() {
    let formfield = { fieldName: 'a', fieldValue: '12' };
    this.stepsService.nextStep([formfield]);
  }

  prevStep() {
    this.stepsService.popStep();
  }

  get isMobileUser(): boolean {
    return screen.width < 880;
  }


}
