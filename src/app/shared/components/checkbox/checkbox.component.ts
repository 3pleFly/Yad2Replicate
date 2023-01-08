import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CheckboxItem } from '../../models/checkboxItem.model';
import { ChildrenView } from '../../models/inner.models';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  @Input() checkboxItem!: CheckboxItem;
  @Input() multiLayered!: CheckboxItem;
  @Output() childrenListViewEvent = new EventEmitter<ChildrenView>();
  childrenView: ChildrenView = { view: false };
  CountOfCheckedChildren: number = 0;

  openChildrenListView() {
    if (this.childrenView.view) {
      this.childrenListViewEvent.emit(this.childrenView);
      this.childrenView.view = false;
      return;
    }
    this.childrenListViewEvent.emit(this.childrenView);
    this.childrenView.view = true;
  }

  toggle(childid: number | string) {
    this.checkboxItem.toggleChild(childid);
  }

  get isAllChecked(): boolean {
    return (
      this.checkboxItem.subItems?.filter((item) => item.checked).length ===
      this.checkboxItem.subItems?.length
    );
  }
}
