import { Component, Input, OnInit } from '@angular/core';
import { SevenStepViewModel } from '../../../models/seven-step-form.model';
import { StepsService } from '../../../services/steps.service';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss'],
})
export class Step4Component implements OnInit {
  @Input() viewModel!: SevenStepViewModel;

  constructor(private stepsService: StepsService) {}

  ngOnInit(): void {}

  get form() {
    return this.stepsService.form;
  }

}
