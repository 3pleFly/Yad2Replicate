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
import { ProjectedContentComponent } from './components/projected-content/projected-content.component';
import { CheckboxParentComponent } from './components/checkbox-parent/checkbox-parent.component';
import { CheckboxChildrenComponent } from './components/checkbox-children/checkbox-children.component';

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
    ProjectedContentComponent,
    CheckboxParentComponent,
    CheckboxChildrenComponent,
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
    SelectComponent,
    ProjectedContentComponent,
    CheckboxParentComponent,
    CheckboxChildrenComponent
  ],
})
export class SharedModule {}
