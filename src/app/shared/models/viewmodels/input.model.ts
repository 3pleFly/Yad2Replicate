import { Observable } from 'rxjs';

abstract class BaseViewModel {
  labelText?: string;
  disabled?: boolean;
  readonly?: string;
  placeholder?: string;
  required?: boolean;
  visible?: boolean;
  isLoading?: boolean;
}

export class InputView extends BaseViewModel {
  passwordIcon?: boolean;
  inputType?: string = 'text';
}


export class SelectView extends BaseViewModel {
  options?: string[];
  options$?: Observable<string[]>;
}
