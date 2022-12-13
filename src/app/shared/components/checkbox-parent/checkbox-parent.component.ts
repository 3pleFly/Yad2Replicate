import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { CheckBoxItem, View } from '../../models/inner.models';
import { CheckboxService } from '../../services/checkbox.service';

@Component({
  selector: 'app-checkbox-parent',
  templateUrl: './checkbox-parent.component.html',
  styleUrls: ['./checkbox-parent.component.scss'],
})
export class CheckboxParentComponent implements OnInit {
  @Input() checkboxItem!: CheckBoxItem;
  @ViewChild('arrow') arrowElement!: ElementRef;
  viewChildren: View = { view: false };

  constructor(private checkboxService: CheckboxService) {}

  ngOnInit(): void {
    this.checkboxService.useService(this.viewChildren, this.checkboxItem);
  }

  checkParentAndChildren() {
    this.checkboxService.toggleCheck(this.checkboxItem.id);
  }

  toggleChildrenView(): void {
    this.checkboxService.openChildrenView(this.viewChildren);
  }

  get selectedIndicator() {
    let selectedCount = this.checkboxSubItemsChecked?.length;
    if (selectedCount) return `נבחרו ${selectedCount} סוגים`;
    return '';
  }

  get checkboxSubItemsChecked() {
    return this.checkboxItem.subItems?.filter((item) => item.checked);
  }
}
