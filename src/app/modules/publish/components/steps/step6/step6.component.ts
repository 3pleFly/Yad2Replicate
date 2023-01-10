import { Component, Input } from '@angular/core';
import { SevenStepViewModel } from '../../../models/seven-step-form.model';
import { StepsService } from '../../../services/steps.service';

@Component({
  selector: 'app-step6',
  templateUrl: './step6.component.html',
  styleUrls: ['./step6.component.scss']
})
export class Step6Component {
  @Input() viewModel!: SevenStepViewModel;

  constructor(private stepsService: StepsService) {}

  ngOnInit(): void {}

  get form() {
    return this.stepsService.form;
  }
}
