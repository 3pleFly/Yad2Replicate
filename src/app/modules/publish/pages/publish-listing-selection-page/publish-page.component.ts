import { Component, HostListener, OnInit } from '@angular/core';
import { MockDataService } from 'src/app/shared/services/mock-data.service';
import { Observable } from 'rxjs';
import { CategoryBoxModel } from 'src/app/shared/models/viewmodels/category-box.model';
import { BoxDisplays } from 'src/app/shared/models/viewmodels/category-box.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-publish-page',
  templateUrl: './publish-page.component.html',
  styleUrls: ['./publish-page.component.scss'],
})
export class PublishListingSelectionPage implements OnInit {
  categories$!: Observable<CategoryBoxModel[]>;
  showPublishPageModal: boolean = false;
  windowWidth: number = screen.width;
  queryParams!: Params;
  clickedCategory!: CategoryBoxModel;

  constructor(
    private mockDataService: MockDataService,
    private route: ActivatedRoute
  ) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.windowWidth = event.target.innerWidth;
  }

  ngOnInit(): void {
    this.categories$ = this.mockDataService.getCategoryBoxTypes();
    this.route.queryParams.subscribe((params) => (this.queryParams = params));
  }

  handleClickedCategoryEvent(category: CategoryBoxModel) {
    this.showPublishPageModal = true;
    this.clickedCategory = category;
    //TODO do something with the category...
  }

  get isQueryParamsEmpty() {
    return Object.keys(this.queryParams).length === 0;
  }

  get boxDisplay() {
    return BoxDisplays;
  }

  get isMobileUser(): boolean {
    return window.innerWidth < 1100;
  }
}
