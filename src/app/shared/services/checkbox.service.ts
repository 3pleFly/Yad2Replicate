import { Injectable } from '@angular/core';
import { MobileSearchPageComponent } from 'src/app/mobile/standalones/mobile-search-page/mobile-search-page.component';
import { CheckBoxItem, View } from '../models/inner.models';

@Injectable()
export class CheckboxService {
  checkboxItems: CheckBoxItem[] = new Array();
  viewChildren: View[] = new Array();

  constructor() {}

  useService(viewChildren: View, checkBoxParent: CheckBoxItem) {
    this.viewChildren.push(viewChildren);
    this.checkboxItems.push(checkBoxParent);
  }

  resetSelection() {
    this.checkboxItems.forEach((item) => {
      this.checkAll(item);
      this.uncheckAll(item);
    });
  }

  openChildrenView(viewChildren: View) {
    if (viewChildren.view) {
      viewChildren.view = false;
      return;
    }
    this.closeAllCheckboxes();
    viewChildren.view = true;
  }

  toggleCheck(parentId: number | string) {
    let parentCheckbox = this.checkboxItems.find(
      (item) => item.id === parentId
    );
    if (!parentCheckbox) {
      console.error('no parent checkbox');
      return;
    }
    if (parentCheckbox?.checked) {
      this.uncheckAll(parentCheckbox);
      return;
    } else {
      this.checkAll(parentCheckbox);
    }
  }

  private uncheckAll(parentCheckbox: CheckBoxItem) {
    if (!parentCheckbox.subItems) return;

    for (const childCheckbox of parentCheckbox.subItems) {
      if (!childCheckbox.checked) {
        this.checkAll(parentCheckbox);
        return;
      }
    }

    parentCheckbox.checked = false;
    parentCheckbox.subItems?.forEach((item) => (item.checked = false));
  }

  private checkAll(parentCheckbox: CheckBoxItem) {
    parentCheckbox.checked = true;
    parentCheckbox.subItems?.forEach((item) => (item.checked = true));
  }

  public toggleChildCheckbox(childCheckbox: CheckBoxItem) {
    childCheckbox.checked = !childCheckbox.checked;
  }

  private closeAllCheckboxes() {
    this.viewChildren.forEach((v) => (v.view = false));
  }

  get isAnyChecked() {
    return this.checkboxItems.filter((item) => item.checked).length > 0;
  }
}
