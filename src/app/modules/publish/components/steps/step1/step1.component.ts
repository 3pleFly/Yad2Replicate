import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { defer, map, Observable, of, startWith, take } from 'rxjs';
import {
  BoxDisplays,
  CategoryBoxModel,
} from 'src/app/shared/models/category-box.model';
import {
  SevenStepsFormData,
  SevenStepViewModel,
} from '../../../models/seven-step-form.model';
import { StepsService } from '../../../services/steps.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
})
export class Step1Component implements OnInit {
  form = this.fb.group({
    category: this.fb.control<CategoryBoxModel | null>(null),
  });
  @Input() viewModel!: SevenStepViewModel;

  constructor(private fb: FormBuilder, private stepsService: StepsService) {}

  ngOnInit(): void {}

  selectCategory(category: CategoryBoxModel) {
    this.form.controls.category.setValue(category);
    this.stepsService.nextStep();
  }

  get BoxDisplays() {
    return BoxDisplays;
  }

  get categories() {
    return this.viewModel.inputs?.categories;
  }
}
