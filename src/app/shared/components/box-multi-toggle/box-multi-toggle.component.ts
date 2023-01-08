import { Component, Input, OnInit } from '@angular/core';
import { CheckboxItem } from '../../models/checkboxItem.model';
import { MultiToggleBox } from '../../models/inner.models';

@Component({
  selector: 'app-box-multi-toggle',
  templateUrl: './box-multi-toggle.component.html',
  styleUrls: ['./box-multi-toggle.component.scss'],
})
export class BoxMultiToggleComponent implements OnInit {
  @Input() multiToggleBoxes!: MultiToggleBox[];

  constructor() {}

  ngOnInit(): void {}

}
