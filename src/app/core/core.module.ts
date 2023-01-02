import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { MobileModule } from '../mobile/mobile.module';
import { SharedModule } from '../shared/shared.module';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from './services/spinner.interceptor';

import { MainPageComponent } from './main-page/main-page.component';
@NgModule({
  declarations: [MainPageComponent],
  providers: [],
  imports: [CommonModule, CoreRoutingModule, SharedModule, MobileModule],
  exports: [],
})
export class CoreModule {}
