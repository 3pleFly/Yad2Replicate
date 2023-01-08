import { Component, Input, Output } from '@angular/core';
import {
  CategoryBoxModel,
  BoxDisplays,
} from 'src/app/shared/models/category-box.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step1-view',
  templateUrl: './step1-view.component.html',
  styleUrls: ['./step1-view.component.scss'],
})
export class Step1ViewComponent {

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  get BoxDisplays() {
    return BoxDisplays;
  }

  nextStep(category: CategoryBoxModel) {
  }

  get isMobileUser(): boolean {
    return screen.width < 880;
  }
}
