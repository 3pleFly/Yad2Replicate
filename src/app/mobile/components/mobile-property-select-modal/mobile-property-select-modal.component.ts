import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CheckBoxItem } from 'src/app/shared/models/inner.models';
import { CheckboxService } from 'src/app/shared/services/checkbox.service';

@Component({
  selector: 'app-mobile-property-select-modal',
  templateUrl: './mobile-property-select-modal.component.html',
  styleUrls: ['./mobile-property-select-modal.component.scss'],
})
export class MobilePropertySelectModalComponent implements OnInit {
  @Input() checkBoxItems!: CheckBoxItem[];
  @Input() showModal!: boolean;
  @Output() showModalChange = new EventEmitter<boolean>();

  constructor(private checkboxService: CheckboxService) {}

  ngOnInit(): void {}

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler() {
    this.emitCloseModal();
  }

  emitCloseModal(): void {
    this.showModalChange.emit(false);
  }

  checkChildren(checkBoxItem: CheckBoxItem): void {
    checkBoxItem.checked = true;
    checkBoxItem.subItems?.forEach((item) => (item.checked = true));
  }

  unCheckChildren(checkBoxItem: CheckBoxItem): void {
    if (!checkBoxItem.subItems) return;

    for (let i = 0; i < checkBoxItem.subItems?.length; i++) {
      if (!checkBoxItem.subItems[i].checked) {
        this.checkChildren(checkBoxItem);
        return;
      }
    }
    checkBoxItem.checked = false;
    checkBoxItem.subItems?.forEach((item) => (item.checked = false));
  }

  isAnyChecked(): boolean {
    return this.checkboxService.isAnyChecked;
  }

  resetSelection(): void {
    this.checkboxService.resetSelection();
  }
}
