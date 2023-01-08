import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SevenStepViewModel } from '../../models/seven-step-form.model';
import { StepsService } from '../../services/steps.service';

@Component({
  selector: 'app-collapsed-step',
  templateUrl: './collapsed-step.component.html',
  styleUrls: ['./collapsed-step.component.scss'],
})
export class CollapsedStepComponent implements OnInit, OnDestroy {
  @Input() viewModel!: SevenStepViewModel;
  activeStep: number = 0;
  activeStepSubscription!: Subscription;

  constructor(private stepsService: StepsService) {}

  ngOnDestroy(): void {
    this.activeStepSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.activeStepSubscription = this.stepsService.activeStep$.subscribe(
      (step) => (this.activeStep = step)
    );
  }

  expandStep() {}

  get isStepCompleted(): boolean {
    return this.activeStep > this.viewModel.stepStage;
  }
}
