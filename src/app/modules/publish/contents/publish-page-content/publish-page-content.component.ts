import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CategoryBoxModel } from 'src/app/shared/models/viewmodels/category-box.model';
import { BoxDisplays } from 'src/app/shared/models/viewmodels/category-box.model';

@Component({
  selector: 'app-publish-page-content',
  template: ` <ng-template #desktopVersionTemplate [ngIf]="categories">
    <div class="large_box_row row">
      <app-category-box
        *ngFor="let category of categories.slice(0, 3)"
        [categoryBoxModel]="category"
        [boxDisplay]="BoxDisplay.All"
        (click)="emitSelection(category)"
      ></app-category-box>
    </div>

    <div class="medium_box_row row">
      <app-category-box
        *ngFor="let category of categories.slice(3, 7)"
        [categoryBoxModel]="category"
        [boxDisplay]="BoxDisplay.All"
        (click)="emitSelection(category)"
      ></app-category-box>
    </div>

    <div class="small_box_row row">
      <app-category-box
        *ngFor="let category of categories.slice(7)"
        [categoryBoxModel]="category"
        [boxDisplay]="BoxDisplay.Title"
        (click)="emitSelection(category)"
      ></app-category-box>
    </div>
  </ng-template>`,
  styles: [
    `
      .row {
        display: flex;
        gap: 1.6rem;
      }

      .large_box_row {
        height: 225px;
      }

      .medium_box_row {
        height: 225px;
      }

      .small_box_row {
        height: 50px;
      }

      .large_box_row > app-category-box {
        --font-size: 20px;
        --box-width: 33%;
      }

      .medium_box_row > app-category-box {
        --font-size: 20px;
        --box-width: 25%;
      }

      .small_box_row > app-category-box {
        --font-size: 18px;
        --box-width: 12.5%;
      }
    `,
  ],
})
export class PublishPageContent {
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
