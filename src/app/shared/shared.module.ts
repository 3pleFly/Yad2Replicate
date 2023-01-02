import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
import { SwitcherComponent } from './components/switcher/switcher.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { DropdownInputComponent } from './components/dropdown-input/dropdown-input.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarModalComponent } from './components/sidebar-modal/sidebar-modal.component';
import { BoldSubStringPipe } from './pipes/bold-sub-string.pipe';

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
    SwitcherComponent,
    TextareaComponent,
    ProgressBarComponent,
    DropdownInputComponent,
    SidebarModalComponent,
    NavbarComponent,
    SpinnerComponent,
    BoldSubStringPipe,
  ],
  imports: [CommonModule, HttpClientModule, RouterModule, FormsModule],
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
    SwitcherComponent,
    TextareaComponent,
    ProgressBarComponent,
    DropdownInputComponent,
    SidebarModalComponent,
    NavbarComponent,
    SpinnerComponent,
  ],
})
export class SharedModule {}
