import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SliderSwitchComponent } from './components/slider-switch/slider-switch.component';
import { SearchBarMobileComponent } from './components/search-bar/search-bar-mobile/search-bar-mobile.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { InputComponent } from './components/input/input.component';

import { SingleSwitchComponent } from './components/single-switch/single-switch.component';
import { BoxMultiToggleComponent } from './components/box-multi-toggle/box-multi-toggle.component';
import { SelectTypePageComponent } from './components/box-multi-toggle/select-type-page/select-type-page.component';

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
  ],
  imports: [CommonModule],
  exports: [
    SliderSwitchComponent,
    SearchBarComponent,
    SearchBarMobileComponent,
    BreadcrumbsComponent,
    InputComponent,
    SingleSwitchComponent,
    BoxMultiToggleComponent,
  ],
})
export class SharedModule {}
