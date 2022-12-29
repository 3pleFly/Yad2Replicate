import { Component, Input } from '@angular/core';
import { SevenStepViewModel } from 'src/app/shared/models/viewmodels/vm.model';
import { SevenstepService } from '../../services/sevenstep.service';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
})
export class StepComponent {
  @Input() stepViewModel!: SevenStepViewModel;

  constructor(private stepsService: SevenstepService) {}

  ngOnInit(): void {}

  nextStep(): void {
    this.stepsService.activeStage += 1;
  }

  prevStep(): void {
    this.stepsService.activeStage -= 1;
  }

  get isNotFirstStep(): boolean {
    return this.stepViewModel.stepStage !== 0;
  }

  get isMobileUser(): boolean {
    return screen.width < 880;
  }

  get activeStage(): number {
    return this.stepsService.activeStage;
  }

  get isExpandedView(): boolean {
    return this.stepsService.activeStage === this.stepViewModel.stepStage;
  }

  get showToolTipView(): boolean {
    return (
      this.activeStage === 1 || this.activeStage === 3 || this.activeStage === 5
    );
  }
}
