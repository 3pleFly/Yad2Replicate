import { Component, Input } from '@angular/core';
import { StepsService } from '../../services/steps.service';

@Component({
  selector: 'app-step-container',
  templateUrl: './step-container.component.html',
  styleUrls: ['./step-container.component.scss']
})
export class StepContainerComponent {

  @Input() toggleCollapsed!: boolean;



}
