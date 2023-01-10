import { Component, Input } from '@angular/core';
import {
  basicOrder,
  highlightedOrder,
  recommendedOrder,
} from '../../../models/input.data';
import { SevenStepViewModel } from '../../../models/seven-step-form.model';
import { StepsService } from '../../../services/steps.service';

@Component({
  selector: 'app-step7',
  templateUrl: './step7.component.html',
  styleUrls: ['./step7.component.scss'],
})
export class Step7Component {
  @Input() viewModel!: SevenStepViewModel;
  orderTypes = [basicOrder, recommendedOrder, highlightedOrder];

  constructor(private stepsService: StepsService) {}

  ngOnInit(): void {}

  get form() {
    return this.stepsService.form;
  }
}
