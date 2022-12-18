import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CheckBoxItem } from 'src/app/shared/models/checkboxItem.model';
import { ChildrenView } from 'src/app/shared/models/inner.models';

@Component({
  selector: 'app-mobile-property-select-modal',
  templateUrl: './mobile-property-select-modal.component.html',
  styleUrls: ['./mobile-property-select-modal.component.scss'],
})
export class MobilePropertySelectModalComponent implements OnInit {
  @Input() checkBoxItems!: CheckBoxItem[];
  @Input() showModal!: boolean;
  @Output() showModalChange = new EventEmitter<boolean>();
  prevCheckboxChildrenView!: ChildrenView;
  constructor() {}

  ngOnInit(): void {}

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler() {
    this.emitCloseModal();
  }

  emitCloseModal(): void {
    this.showModalChange.emit(false);
  }

  handleCheckboxChildrenViewEvent(view: ChildrenView) {
    if (this.prevCheckboxChildrenView && this.prevCheckboxChildrenView.view) {
      this.prevCheckboxChildrenView.view = false;
    }
    this.prevCheckboxChildrenView = view;
  }

  clearAll(): void {
    this.checkBoxItems.forEach(item => item.clear());
  }

  get isAnySelected(): boolean {
    let checkItem = this.checkBoxItems.find((item) => item.checked);
    if (!checkItem) return false;
    return true;
  }


}
