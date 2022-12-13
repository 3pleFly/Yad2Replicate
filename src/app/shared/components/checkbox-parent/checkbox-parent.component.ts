import { Component, Input, OnInit } from '@angular/core';
import { CheckBoxItem } from '../../models/inner.models';

@Component({
  selector: 'app-checkbox-parent',
  templateUrl: './checkbox-parent.component.html',
  styleUrls: ['./checkbox-parent.component.scss']
})
export class CheckboxParentComponent implements OnInit  {

  @Input() checkboxItem!: CheckBoxItem;

  ngOnInit(): void {
    console.log(this.checkboxItem);

  }

}
