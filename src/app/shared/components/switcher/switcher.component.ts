import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Yad2Properties } from '../../models/yad2Properties.model';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss'],
})
export class SwitcherComponent {
  @Input() type!: SwitcherTypes;
  @Input() labelName!: string;
  @Input() data!: any[];

  @Output() multiRoundedSwitchedElementsEvent = new EventEmitter<string[]>();
  @Output() SingleSwitchedRectangleEvent = new EventEmitter<string>();
  switchedMultiRounded: string[] = new Array();
  switchedSingleRectangle?: string;

  switchRectangle(value: string) {
    this.switchedSingleRectangle = value;
    this.SingleSwitchedRectangleEvent.emit(this.switchedSingleRectangle);
  }

  toggleSwitchRounded(value: string) {
    let index = this.switchedMultiRounded.indexOf(value);
    if (index !== -1) {
      this.switchedMultiRounded.splice(index, 1);
      return;
    }
    this.switchedMultiRounded = [...this.switchedMultiRounded, value];
    this.multiRoundedSwitchedElementsEvent.emit(this.switchedMultiRounded);
  }

  get itemWidthPerDataLength(): string {
    return 100 / this.data.length + '%';
  }

  get SwitcherTypes() {
    return SwitcherTypes;
  }
}

export enum SwitcherTypes {
  SINGLE_RECTANGLES = 'SINGLE_RECTANGLES',
  MULTI_ROUND = 'MULTI_ROUND',
}
