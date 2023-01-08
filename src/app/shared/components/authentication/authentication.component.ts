import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputView } from '../../models/viewmodels/input.model';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent {
  @Input() registrationMode: boolean = false;
  @Output() registrationModeChange = new EventEmitter<boolean>();

  get emailInputModel(): InputView {
    return { placeholder: 'yourmail@email.co.il' , required: false};
  }

  get passwordInputModel(): InputView {
    return {
      inputType: 'password',
      passwordIcon: true,
      placeholder: 'הקלדת סיסמא',
      required: false
    };
  }
}
