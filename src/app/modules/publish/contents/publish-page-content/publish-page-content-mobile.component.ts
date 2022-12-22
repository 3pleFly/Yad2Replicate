import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CategoryBoxModel } from 'src/app/shared/models/viewmodels/category-box.model';
import { BoxDisplays } from 'src/app/shared/models/viewmodels/category-box.model';

@Component({
  selector: 'app-publish-page-content-mobile',
  template: `
    <div class="dual-rows">
      <app-category-box
        *ngFor="let category of categories"
        (click)="emitSelection(category)"
        [categoryBoxModel]="category"
        [boxDisplay]="BoxDisplay.ImageAndTitle"
      ></app-category-box>
    </div>
  `,
  styles: [
    `
      .dual-rows {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
      }

      .dual-rows app-category-box {
        --box-img-width: 104px;
        --box-img-height: 104px;
        --box-width: 47%;
        --box-title-margin-bottom: 24px;
      }
    `,
  ],
})
export class PublishPageContentMobile {
  @Input() categories: CategoryBoxModel[] | null = null;
  @Output() onClickedCategoryEvent = new EventEmitter<CategoryBoxModel>();

  constructor() {}

  emitSelection(category: CategoryBoxModel) {
    this.onClickedCategoryEvent.emit(category);
  }

  get BoxDisplay() {
    return BoxDisplays;
  }
}
