import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable, ObservedValueOf, Subscription } from 'rxjs';
import { CategoryBoxModel } from 'src/app/shared/models/category-box.model';
import { YAD2_ASSET } from 'src/app/shared/models/yad2Assets.const';
import { MockDataService } from 'src/app/shared/services/mock-data.service';
import { sevenStepsModelData } from '../../models/input.data';
import {
  SevenStepsFormData,
  SevenStepsViewModels,
} from '../../models/seven-step-form.model';
import { StepsService } from '../../services/steps.service';

@Component({
  selector: 'app-seven-steps-page',
  templateUrl: './seven-steps-page.component.html',
  styleUrls: ['./seven-steps-page.component.scss'],
})
export class SevenStepsPageComponent implements OnInit, OnDestroy {
  activeStep$!: Observable<number>;
  sevenStepsViewModels: SevenStepsViewModels = sevenStepsModelData;
  formData!: SevenStepsFormData;

  constructor(
    private mockDataService: MockDataService,
    private fb: FormBuilder,
    private stepsService: StepsService
  ) {}

  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.activeStep$ = this.stepsService.activeStep$;
  }

  nextStep() {
    this.stepsService.nextStep();
  }

  prevStep() {
    this.stepsService.prevStep();
  }
}
