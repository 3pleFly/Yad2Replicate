import {
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { defer, map, mapTo, of } from 'rxjs';
import { InputView } from '../../models/viewmodels/input.model';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @ViewChild('input') input!: ElementRef;
  @Input() inputModel!: InputView;
  @Input() control!: FormControl;
  @Input() inputValue: string | null = null;
  @Input() isLoading: boolean = false;
  @Output() keyUpEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  togglePasswordInputElementVisibility() {
    if (this.inputModel.inputType === 'password') {
      this.inputModel.inputType = 'text';
      return;
    } else {
      this.inputModel.inputType = 'password';
    }
  }

  emitKeyUpInputEvent(e: Event) {
    this.keyUpEvent.emit(this.input.nativeElement.value);
  }

  get isEmptyView(): boolean {
    if (!Object.keys(this.inputModel).length) return true;
    return false;
  }
}
