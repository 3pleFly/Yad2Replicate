import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable, ObservedValueOf, Subscription } from 'rxjs';
import { CategoryBoxModel } from 'src/app/shared/models/category-box.model';
import { Yad2Asset, YAD2_ASSET } from 'src/app/shared/models/yad2Assets.const';
import { MockDataService } from 'src/app/shared/services/mock-data.service';
import { sevenStepsModelData } from '../../models/input.data';
import {
  SevenStepsForm,
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
  private childrenFormValueChangesSubscription!: Subscription;
  childrenFormGroups: FormGroup = this.fb.group<SevenStepsForm>({});
  activeStep$!: Observable<number>;
  sevenStepsViewModels: SevenStepsViewModels = sevenStepsModelData;
  formData!: SevenStepsFormData;

  constructor(
    private mockDataService: MockDataService,
    private fb: FormBuilder,
    private stepsService: StepsService
  ) {}

  ngOnDestroy(): void {
    this.childrenFormValueChangesSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.activeStep$ = this.stepsService.activeStep$;
    this.childrenFormValueChangesSubscription =
      this.childrenFormGroups.valueChanges.subscribe((v) => {});
  }

  addChildForm<K extends keyof SevenStepsForm>(
    name: K,
    group: SevenStepsForm[K]
  ) {
    this.childrenFormGroups.setControl(name, group);
  }

  patchFormData(patch: Partial<SevenStepsFormData>) {
    this.formData = { ...this.formData, ...patch };
  }

  nextStep() {
    this.stepsService.nextStep();
  }

  prevStep() {
    this.stepsService.prevStep();
  }
}
