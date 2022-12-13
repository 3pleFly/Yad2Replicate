import { Component, Input } from '@angular/core';
import { InputType } from '../../models/inputType.enum';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() labelName!: string;
  @Input() inputPlaceholder: string = "";
  @Input() disabled: boolean = false;
  @Input() inputType: InputType = InputType.Text;


}