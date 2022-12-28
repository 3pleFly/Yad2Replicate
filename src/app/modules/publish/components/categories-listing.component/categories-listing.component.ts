import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { CategoryBoxModel } from 'src/app/shared/models/category-box.model';
import { BoxDisplays } from 'src/app/shared/models/category-box.model';

@Component({
  selector: 'app-categories-listing',
  templateUrl: './categories-listing.component.html',
  styleUrls: ['./categories-listing.component.scss'],
})
export class CategoriesListingComponent {
  @Input() categories: CategoryBoxModel[] | null = null;
  @Output() onClickedCategoryEvent = new EventEmitter<CategoryBoxModel>();
  windowWidth: number = screen.width;

  constructor() {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.windowWidth = event.target.innerWidth;
  }

  emitSelection(category: CategoryBoxModel) {
    this.onClickedCategoryEvent.emit(category);
  }

  get BoxDisplay() {
    return BoxDisplays;
  }

  get isMobileUser(): boolean {
    return window.innerWidth < 1100;
  }
}
