import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SliderSwitchComponent } from './components/slider-switch/slider-switch.component';
import { SearchBarMobileComponent } from './components/search-bar/search-bar-mobile/search-bar-mobile.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { InputComponent } from './components/input/input.component';

import { SingleSwitchComponent } from './components/single-switch/single-switch.component';
import { BoxMultiToggleComponent } from './components/box-multi-toggle/box-multi-toggle.component';
import { SelectTypePageComponent } from './components/select-type-page/select-type-page.component';
import { SelectComponent } from './components/select/select.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ModalComponent } from './components/modal/modal.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { HebrewMonthPipe } from './pipes/hebrew-month.pipe';

@NgModule({
  declarations: [
    SliderSwitchComponent,
    SearchBarMobileComponent,
    SearchBarComponent,
    BreadcrumbsComponent,
    InputComponent,
    SingleSwitchComponent,
    BoxMultiToggleComponent,
    SelectTypePageComponent,
    SelectComponent,
    CheckboxComponent,
    ModalComponent,
    CalendarComponent,
    HebrewMonthPipe,
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [
    SliderSwitchComponent,
    SearchBarComponent,
    SearchBarMobileComponent,
    BreadcrumbsComponent,
    InputComponent,
    SingleSwitchComponent,
    BoxMultiToggleComponent,
    CheckboxComponent,
    SelectComponent,
    ModalComponent,
    CalendarComponent
  ],
})
export class SharedModule {}
