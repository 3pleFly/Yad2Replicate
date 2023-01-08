import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SelectView } from '../../models/viewmodels/input.model';

@Component({
  selector: 'app-select',
  template: `
    <ng-container>
      <label>
        <span>{{
          selectModel.labelText | asterisk : !!selectModel.required
        }}</span>
        <img src="../../../../assets/images/downdrop_arrow.png" alt="" />
        <select [formControl]="control">
          <option [ngValue]="null" selected hidden>
            <span>{{ selectModel.placeholder }}</span>
          </option>
          <option *ngFor="let info of selectModel.options$ | async">
            <span>{{ info }}</span>
          </option>
          <option *ngFor="let info of selectModel.options">
            <span>{{ info }}</span>
          </option>
        </select>
      </label>
    </ng-container>
  `,
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  @Input() selectModel!: SelectView;
  @Input() control = new FormControl({ value: '', disabled: false });
  @Output() selectOptionEvent = new EventEmitter();

  emitSelection(value: string) {
    this.selectOptionEvent.emit(value);
  }

  get isEmptyView(): boolean {
    if (!Object.keys(this.selectModel).length) return true;
    return false;
  }
}
