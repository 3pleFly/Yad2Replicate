import { Component, Input, OnInit } from '@angular/core';
import { MultiToggleBox } from '../../models/multiToggleBox.model';

@Component({
  selector: 'app-box-multi-toggle',
  templateUrl: './box-multi-toggle.component.html',
  styleUrls: ['./box-multi-toggle.component.scss'],
})
export class BoxMultiToggleComponent implements OnInit {
  @Input() items!: MultiToggleBox[];
  selectedItems!: Map<number, MultiToggleBox>;

  ngOnInit(): void {
    this.selectedItems = new Map<number, MultiToggleBox>();
  }

  selectItem(buttonElement: HTMLElement, textElement: HTMLElement, item: MultiToggleBox) {
    buttonElement.classList.toggle('active');
    textElement.classList.toggle('span-active');
    textElement.innerText = `${item.optionItems.length} סוגים נבחרו`

    if (this.selectedItems.has(item.id)) {
      var result = this.selectedItems.delete(item.id);
    textElement.innerText = `${item.optionItems.length} סוגי נכסים`

      return;
    }

    this.selectedItems.set(item.id, item);
  }
}
