import { Component, OnInit } from '@angular/core';
import { MockDataService } from 'src/app/shared/services/mock-data.service';
import { Observable } from 'rxjs';
import { CategoryBoxModel } from 'src/app/shared/models/category-box.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-listing-category',
  templateUrl: './listing-category-selection.component.html',
  styleUrls: ['./listing-category-selection.component.scss'],
})
export class PublishListingSelectionPage implements OnInit {
  categories$!: Observable<CategoryBoxModel[]>;
  showPublishPageModal: boolean = false;
  clickedCategory!: CategoryBoxModel;

  constructor(private mockDataService: MockDataService) {}

  ngOnInit(): void {
    this.categories$ = this.mockDataService.getSelectListingCategories();
  }

  handleClickedCategoryEvent(category: CategoryBoxModel) {
    this.showPublishPageModal = true;
    this.clickedCategory = category;
    //TODO do something with the category...
  }
}
