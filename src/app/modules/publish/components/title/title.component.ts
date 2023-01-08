import { Component, Input } from '@angular/core';
import { SevenStepViewModel } from '../../models/seven-step-form.model';


@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  @Input() viewModel!: SevenStepViewModel;
}
