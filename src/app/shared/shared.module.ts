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
import { SelectComponent } from './components/select/select.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { HebrewMonthPipe } from './pipes/hebrew-month.pipe';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule } from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { CategoryBoxComponent } from './components/category-box/category-box.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    SliderSwitchComponent,
    SearchBarMobileComponent,
    SearchBarComponent,
    BreadcrumbsComponent,
    InputComponent,
    SingleSwitchComponent,
    BoxMultiToggleComponent,
    SelectComponent,
    CheckboxComponent,
    CalendarComponent,
    HebrewMonthPipe,
    RegisterComponent,
    AuthenticationComponent,
    CategoryBoxComponent,
    ModalComponent,
  ],
  imports: [CommonModule, HttpClientModule, RouterModule],
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
    CalendarComponent,
    RegisterComponent,
    AuthenticationComponent,
    CategoryBoxComponent,
    ModalComponent,
  ],
})
export class SharedModule {}
