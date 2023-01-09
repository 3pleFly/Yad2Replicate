import { Component, Input } from '@angular/core';
import { InputModel } from '../../models/seven-step-form.model';

@Component({
  selector: 'app-publish-input',
  templateUrl: './publish-input.component.html',
  styleUrls: ['./publish-input.component.scss']
})
export class PublishInputComponent {

  @Input() inputModel!: InputModel;
}
