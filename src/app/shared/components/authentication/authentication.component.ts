import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputViewModel } from '../../models/viewmodels/input-component.model';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent {
  @Input() registrationMode: boolean = false;
  @Output() registrationModeChange = new EventEmitter<boolean>();

  get emailInputModel(): InputViewModel {
    return { placeholder: 'yourmail@email.co.il' };
  }

  get passwordInputModel(): InputViewModel {
    return {
      inputType: 'password',
      passwordIcon: true,
      placeholder: 'הקלדת סיסמא',
    };
  }
}
