import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CheckBoxItem } from '../../models/inner.models';

@Component({
  selector: 'app-checkbox-children',
  templateUrl: './checkbox-children.component.html',
  styleUrls: ['./checkbox-children.component.scss'],
})
export class CheckboxChildrenComponent {
  @Input() checkboxItems?: CheckBoxItem[];


  toggleCheckbox(checkboxItem: CheckBoxItem): void {
    checkboxItem.checked = !checkboxItem.checked;
  }
}
