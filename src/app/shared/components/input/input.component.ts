import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() labelName!: string;
  @Input() disabled: boolean = false;
  @Input() readonly: string = '';
  @Input() inputType: string = 'text';
  @Input() width: string = '100%';
  @Input() placeHolder: string = '';
  @Input() value: string = '';
  @Input() textColor: string = '';


}
