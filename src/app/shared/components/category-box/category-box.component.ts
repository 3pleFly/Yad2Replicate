import { Component, Input, OnInit } from '@angular/core';
import {
  CategoryBoxModel,
  BoxDisplays,
} from '../../models/viewmodels/category-box.model';

@Component({
  selector: 'app-category-box',
  templateUrl: './category-box.component.html',
  styleUrls: ['./category-box.component.scss'],
})
export class CategoryBoxComponent implements OnInit {
  @Input() categoryBoxModel!: CategoryBoxModel;
  @Input() boxDisplay: BoxDisplays = BoxDisplays.All;

  constructor() {}

  ngOnInit(): void {}

  get isTitleActive() {
    return true;
  }

  get isImageActive() {
    if (
      this.boxDisplay === BoxDisplays.All ||
      this.boxDisplay === BoxDisplays.ImageAndTitle
    )
      return true;
    return false;
  }

  get isSubtitleActive() {
    if (this.boxDisplay === BoxDisplays.All) return true;
    return false;
  }
}
