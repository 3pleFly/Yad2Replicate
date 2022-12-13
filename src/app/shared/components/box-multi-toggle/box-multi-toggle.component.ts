import {
  Component,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MultiToggleBox } from '../../models/inner.models';

@Component({
  selector: 'app-box-multi-toggle',
  templateUrl: './box-multi-toggle.component.html',
  styleUrls: ['./box-multi-toggle.component.scss'],
})
export class BoxMultiToggleComponent implements OnInit {
  @Input() multiToggleBoxes!: MultiToggleBox[];
  selectedItems!: Map<number, MultiToggleBox>;

  ngOnInit(): void {
    this.selectedItems = new Map<number, MultiToggleBox>();
  }

  selectItem(
    buttonElement: HTMLElement,
    textElement: HTMLElement,
    item: MultiToggleBox
  ) {
    buttonElement.classList.toggle('active');
    textElement.classList.toggle('span-active');
    textElement.innerText = `${item.checkBoxItem.subItems?.length} סוגים נבחרו`;

    if (this.selectedItems.has(item.id)) {
      var result = this.selectedItems.delete(item.id);
      textElement.innerText = `${item.checkBoxItem.subItems?.length} סוגי נכסים`;

      return;
    }
    this.selectedItems.set(item.id, item);
  }
}
