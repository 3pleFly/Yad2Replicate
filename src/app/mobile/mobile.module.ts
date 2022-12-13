import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileRoutingModule } from './mobile-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MobilePropertySelectModalComponent } from './components/mobile-property-select-modal/mobile-property-select-modal.component';


@NgModule({
  declarations: [MobilePropertySelectModalComponent ],
  imports: [CommonModule, MobileRoutingModule, SharedModule],
  exports: [MobilePropertySelectModalComponent],
})
export class MobileModule {}
