import { Component, Input, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() labelName!: string;
  @Input() disabled: boolean = false;
  @Input() readonly: string = '';
  @Input() inputType: string = 'text';
  @Input() placeHolder: string = '';
  @Input() value: string = '';
  @Input() passwordIcon: boolean = false;

  constructor() {}

  ngOnInit(): void {

  }

  togglePasswordInputElementVisibility() {
    // this.passwordIconVisiblie = !this.passwordIconVisiblie;
    if (this.inputType === 'password') {
      this.inputType = 'text';
      return;
    } else {
      this.inputType = 'password';
    }
  }
}
