import { Component, Input } from '@angular/core';
import { SevenstepService } from 'src/app/modules/publish/services/sevenstep.service';

@Component({
  selector: 'app-collapsed-step',
  templateUrl: './collapsed-step.component.html',
  styleUrls: ['./collapsed-step.component.scss'],
})
export class CollapsedStepComponent {
  @Input() title!: string;
  @Input() number!: number;
  @Input() isStepComplete!: boolean;

  constructor(private stepService: SevenstepService) {}

  expandStep() {
    if (this.isStepComplete) this.stepService.removeAfter(this.number - 1);
  }
}
