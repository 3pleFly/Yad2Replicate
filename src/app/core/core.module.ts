import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarModalComponent } from './components/sidebar-modal/sidebar-modal.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [NavbarComponent, SidebarModalComponent, MainPageComponent],
  imports: [CommonModule, CoreRoutingModule, SharedModule],
  exports: [NavbarComponent, SidebarModalComponent],
})
export class CoreModule {}
