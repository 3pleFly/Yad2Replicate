import { Component, Input } from '@angular/core';
import { Item } from '../../models/inner.models';

@Component({
  selector: 'app-single-switch',
  templateUrl: './single-switch.component.html',
  styleUrls: ['./single-switch.component.scss']
})
export class SingleSwitchComponent {
  @Input() items!: Item[]
  @Input() selectedItem!: Item;



  selectItem(item: Item) {
    this.selectedItem = item;
  }

}
