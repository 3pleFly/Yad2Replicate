import { Component, HostListener, OnInit } from '@angular/core';
import { MockDataService } from 'src/app/shared/services/mock-data.service';
import { Observable } from 'rxjs';
import { CategoryBoxModel } from 'src/app/shared/models/viewmodels/category-box.model';
import { BoxDisplays } from 'src/app/shared/models/viewmodels/category-box.model';

@Component({
  selector: 'app-publish-page',
  templateUrl: './publish-page.component.html',
  styleUrls: ['./publish-page.component.scss'],
})
export class PublishListingSelectionPage implements OnInit {
  categories$!: Observable<CategoryBoxModel[]>;
  showPublishPageModal: boolean = false;
  windowWidth: number = screen.width;

  constructor(private mockDataService: MockDataService) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.windowWidth = event.target.innerWidth;
  }

  ngOnInit(): void {
    this.categories$ = this.mockDataService.getCategoryBoxTypes();
  }

  handleClickedCategoryEvent(category: CategoryBoxModel) {
    this.showPublishPageModal = true;
    //TODO do something with the category...
  }

  get boxDisplay() {
    return BoxDisplays;
  }

  get isMobileUser(): boolean {
    return window.innerWidth < 1100;
  }
}
