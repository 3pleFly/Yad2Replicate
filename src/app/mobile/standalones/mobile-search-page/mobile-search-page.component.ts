import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  CheckBoxItem,
  Item,
  MultiToggleBox,
} from 'src/app/shared/models/inner.models';
import { InputType } from 'src/app/shared/models/inputType.enum';
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
})
export class MobileSearchPageComponent {
  subCategories: Item[] = subCategories;
  searchCategories: Item[] = searchModes;
  multiToggleBoxItems: MultiToggleBox[] = multiToggleBoxItems;
  checkBoxItems!: CheckBoxItem[];
  selectedSubCategory!: string;
  cityInput!: string;
  showSelectPropertyModal: boolean = true;

  constructor(private route: ActivatedRoute) {}

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
}