import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CheckboxItem } from '../../models/checkboxItem.model';
import { InputView } from '../../models/viewmodels/input.model';

@Component({
  selector: 'app-custom-checkbox',
  template: `
    <label class="label">
      <input class="checkbox" type="checkbox" [formControl]="control" />
      <span class="checkmark"></span>
      <ng-container
        [ngTemplateOutlet]="contentView ?? defaultView"></ng-container>
    </label>

    <ng-template #defaultView>
      <p class="checkbox_label">{{ labelText }}</p>
    </ng-template>
  `,

  styleUrls: ['./custom-checkbox.component.scss'],
})
export class CustomCheckboxComponent {
  @Input() labelText!: string;
  @Input() control!: FormControl;

  @ContentChild('contentView') contentView?: TemplateRef<any>;
}
