import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Yad2Assets } from '../../models/Yad2Assets.enum';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent  {

  @Input() data$?: Observable<string[]>;
  @Input() data?: string[];
  @Input() labelName!: string;
  @Input() placeholder!: string;
  @Output() selectedValue = new EventEmitter<Yad2Assets>();

  selectValue?: string;

  emitSelection(value: Yad2Assets) {
    this.selectedValue.emit(value)
  }



}
