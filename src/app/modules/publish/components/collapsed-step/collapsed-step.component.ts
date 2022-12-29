import { Component, Input } from '@angular/core';
import { SevenstepService } from 'src/app/modules/publish/services/sevenstep.service';
import { SevenStepViewModel } from 'src/app/shared/models/viewmodels/vm.model';

@Component({
  selector: 'app-collapsed-step',
  templateUrl: './collapsed-step.component.html',
  styleUrls: ['./collapsed-step.component.scss'],
})
export class CollapsedStepComponent {
  @Input() stepViewModel!: SevenStepViewModel;

  constructor(private stepsService: SevenstepService) {}

  expandStep() {
    if (this.stepViewModel.stepStage === 0) {
      this.stepsService.resetSteps();
      return;
    }

    if (this.stepViewModel.stepStage < this.stepsService.activeStage) {
      this.stepsService.activeStage = this.stepViewModel.stepStage;
    }
  }

  get isStepCompleted(): boolean {
    return this.stepsService.activeStage > this.stepViewModel.stepStage;
  }
}
