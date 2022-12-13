import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  CheckBoxItem,
  Item,
  MultiToggleBox,
} from 'src/app/shared/models/inner.models';

import { CheckboxService } from 'src/app/shared/services/checkbox.service';
import { SharedModule } from 'src/app/shared/shared.module';
import {
  subCategories,
  searchModes,
  multiToggleBoxItems,
} from 'src/assets/mock/data/mock.data';
import { MobileModule } from '../../mobile.module';

@Component({
  standalone: true,
  selector: 'app-mobile-search-page',
  templateUrl: './mobile-search-page.component.html',
  styleUrls: ['./mobile-search-page.component.scss'],
  imports: [CommonModule, SharedModule, MobileModule],
  providers: [CheckboxService]
})
export class MobileSearchPageComponent {
  subCategories: Item[] = subCategories;
  searchCategories: Item[] = searchModes;
  multiToggleBoxItems: MultiToggleBox[] = multiToggleBoxItems;
  checkBoxItems!: CheckBoxItem[];
  selectedSubCategory!: string;
  cityInput!: string;
  showSelectPropertyModal: boolean = false;

  constructor(private route: ActivatedRoute, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.route.url.subscribe(
      (urlSegment) => (this.selectedSubCategory = urlSegment[2].path)
    );

    this.checkBoxItems = this.multiToggleBoxItems.map(
      (item) => item.checkBoxItem
    );
  }

  selectCategory(category: string) {
    this.selectedSubCategory = category;
  }

  openModal() {
    this.showSelectPropertyModal = true;
    this.cdRef.detectChanges();
  }
}
