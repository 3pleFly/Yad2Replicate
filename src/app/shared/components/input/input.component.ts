import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InputViewModel } from '../../models/viewmodels/input-component.model';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() inputModel: InputViewModel = {};
  @Input() isLoading: boolean = false;

  @Output() changedInputValueEvent = new EventEmitter<string>();
  @Output() onBlur = new EventEmitter<Event>();

  constructor() {}

  ngOnInit(): void {}

  emitInputValue(): void {
    this.changedInputValueEvent.emit(this.inputModel.value);
  }

  emitOnBlur(e: Event) {
    this.onBlur.emit(e);
  }

  togglePasswordInputElementVisibility() {
    if (this.inputModel.inputType === 'password') {
      this.inputModel.inputType = 'text';
      return;
    } else {
      this.inputModel.inputType = 'password';
    }
  }

  set value(value: string) {
    this.inputModel.value = value;
  }

  get value(): string {
    if (!this.inputModel.value) this.inputModel.value = '';
    return this.inputModel.value;
  }

  get disabled(): boolean {
    return this.inputModel.disabled ?? false;
  }

  get inputType(): string {
    return this.inputModel.inputType ?? '';
  }

  get readonly(): string {
    return this.inputModel.readonly ?? '';
  }

  get placeholder(): string {
    return this.inputModel.placeholder ?? '';
  }


  get labelText(): string {
    return this.inputModel.labelText ?? '';
  }

  get passwordIcon(): boolean {
    return this.inputModel.passwordIcon ?? false;
  }
}
