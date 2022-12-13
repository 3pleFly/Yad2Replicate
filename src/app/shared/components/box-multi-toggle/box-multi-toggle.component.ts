import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { CheckBoxItem, MultiToggleBox } from '../../models/inner.models';
import { CheckboxService } from '../../services/checkbox.service';

@Component({
  selector: 'app-box-multi-toggle',
  templateUrl: './box-multi-toggle.component.html',
  styleUrls: ['./box-multi-toggle.component.scss'],
})
export class BoxMultiToggleComponent implements OnInit {
  @Input() multiToggleBoxes!: MultiToggleBox[];

  constructor(private checkboxService: CheckboxService) {}

  ngOnInit(): void {}

  selectItem(checkboxItem: CheckBoxItem) {
    if(checkboxItem.checked) {
      this.checkboxService.uncheckAll(checkboxItem);
      return;
    }
    this.checkboxService.checkAll(checkboxItem);
  }

  getBoxDescriptionString(checkboxItem: CheckBoxItem) {
    let markedLength =
      this.checkboxService.getMarkedCheckboxesCount(checkboxItem);
    if (!markedLength) return `${checkboxItem.subItems?.length} סוגי נכסים`;
    return `${markedLength} סוגים נבחרו`;
  }

  isAnyCheckboxMarked(checkboxItem: CheckBoxItem): boolean {
    return checkboxItem.checked ? true : false;
  }
}
