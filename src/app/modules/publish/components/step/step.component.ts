import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CategoryBoxModel,
  BoxDisplays,
} from 'src/app/shared/models/category-box.model';
import { MockDataService } from 'src/app/shared/services/mock-data.service';
import { SevenstepService } from '../../services/sevenstep.service';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
})
export class StepComponent {
  @Input() stepStage!: number;
  @Input() title!: string;
  @Input() collapsedTitle!: string;

  constructor(private sevenStepsService: SevenstepService) {}

  ngOnInit(): void {}

  get isExpandedView() {
    return this.sevenStepsService.currentStage === this.stepStage - 1;
  }

  get isStepCompleted() {
    return this.sevenStepsService.currentStage > this.stepStage - 1;
  }
}
