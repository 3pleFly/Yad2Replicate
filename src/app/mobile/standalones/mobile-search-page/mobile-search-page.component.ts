import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CalendarDate } from 'src/app/shared/models/calendar.model';
import { CheckBoxItem } from 'src/app/shared/models/checkboxItem.model';
import {
  ButtonModel,
  Item,
  MultiToggleBox,
} from 'src/app/shared/models/inner.models';
import { HebrewMonthPipe } from 'src/app/shared/pipes/hebrew-month.pipe';
import { GovtAPIService } from 'src/app/shared/services/govt-api.service';

import { SharedModule } from 'src/app/shared/shared.module';
import {
  subCategories,
  searchModes,
  multiToggleBoxItems,
  numberOfRoomsSelectOptions,
  advancedSearchCheckboxItems,
  advancedSearchNumberOfFloorsSelectOptions,
} from 'src/assets/mock/data/mock.data';
import { MobileModule } from '../../mobile.module';

@Component({
  standalone: true,
  selector: 'app-mobile-search-page',
  templateUrl: './mobile-search-page.component.html',
  styleUrls: ['./mobile-search-page.component.scss'],
  imports: [CommonModule, SharedModule, MobileModule],
  providers: [HebrewMonthPipe],
})
export class MobileSearchPageComponent {
  subCategories: Item[] = subCategories;
  searchCategories: Item[] = searchModes;
  multiToggleBoxItems: MultiToggleBox[] = multiToggleBoxItems;
  checkBoxItems!: CheckBoxItem[];
  selectedSubCategory!: string;
  cityInput!: string;
  toggleSelectPropertyModal: boolean = false;
  toggleClearAllModal: boolean = false;
  toggleClearAllModalPromptMessage = 'האם לאפס את החיפוש?';
  toggleClearAllModalPrimaryFunc!: ButtonModel;
  toggleClearAllModalSecondaryFunc!: ButtonModel;
  selectLivingAreaData$!: Observable<string[]>;
  selectLivingAreaLabelName: string = 'אזור';
  numberOfRoomsSelectOptions: string[] = numberOfRoomsSelectOptions;
  toggleAdvancedSearchVisibility: boolean = true;
  advancedSearchCheckboxItems: CheckBoxItem[] = advancedSearchCheckboxItems;
  advancedSearchNumberOfFloorsSelectOptions: string[] =
    advancedSearchNumberOfFloorsSelectOptions;
  calendarSelectedDateValueString: string = '';
  calendarSelectedDate!: CalendarDate;
  calendarComponentVisible: boolean = false;
  boundToggleCalendarComponentViewOnFocus!: Function;
  immidiateEntryCheckboxItem: CheckBoxItem =  new CheckBoxItem("9","כניסה מיידית");

  constructor(
    private route: ActivatedRoute,
    private govtApiService: GovtAPIService,
    private hebrewMonthPipe: HebrewMonthPipe
  ) {}

  ngOnInit(): void {
    this.route.url.subscribe(
      (urlSegment) => (this.selectedSubCategory = urlSegment[2].path)
    );

    this.checkBoxItems = this.multiToggleBoxItems.map(
      (item) => item.checkboxItem
    );

    let boundClearAll = this.clearAll.bind(this);

    this.toggleClearAllModalPrimaryFunc = new ButtonModel(
      boundClearAll,
      'אישור'
    );
    this.toggleClearAllModalSecondaryFunc = new ButtonModel(() => {
      this.toggleClearAllModal = false;
    }, 'ביטול');

    this.selectLivingAreaData$ = this.govtApiService.getIsraeliAreasOfLiving();
  }

  selectCategory(category: string) {
    this.selectedSubCategory = category;
  }

  clearAll(): void {
    this.checkBoxItems.forEach((item) => item.clear());
    this.toggleClearAllModal = false;
  }

  get isAnyInputActive(): boolean {
    let activeCheckboxes = this.checkBoxItems.find((item) => item.checked);
    if (activeCheckboxes) return true;

    return false;
  }

  setCalendarSelectedDate(value: CalendarDate) {
    this.calendarSelectedDate = value;

    let hebrewMonthString = this.hebrewMonthPipe.transform(
      value.date.getMonth()
    );

    this.calendarSelectedDateValueString = `החל מ- ${value.date.getDate()} ${hebrewMonthString} ${value.date.getFullYear()}`;
  }

  openCalendarComponentViewOnFocus(e: Event) {
    this.calendarComponentVisible = true;
    e.stopPropagation();
  }

  closeCalendarComponentViewOnFocus(e: Event) {
    this.calendarComponentVisible = false;
    e.stopPropagation();
  }

  stopPropogation(e: Event) {
    e.stopPropagation();
  }
}
