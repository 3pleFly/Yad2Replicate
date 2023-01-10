import { Component, Input } from '@angular/core';
import { SevenStepViewModel } from '../../../models/seven-step-form.model';
import { StepsService } from '../../../services/steps.service';
import { TooltipIcons } from '../../tooltip/tooltip.component';
import { UploadButtonType } from '../../upload-button/upload-button.component';

@Component({
  selector: 'app-step5',
  templateUrl: './step5.component.html',
  styleUrls: ['./step5.component.scss']
})
export class Step5Component {
  @Input() viewModel!: SevenStepViewModel;

  constructor(private stepsService: StepsService) {}

  ngOnInit(): void {}

  get form() {
    return this.stepsService.form;
  }

  get TooltipIcons() {
    return TooltipIcons;
  }

  get UploadButtonType() {
    return UploadButtonType;
  }
}
