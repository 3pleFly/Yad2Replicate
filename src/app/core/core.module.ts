import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarModalComponent } from './components/sidebar-modal/sidebar-modal.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SharedModule } from '../shared/shared.module';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from './services/spinner.interceptor';
import { MobileModule } from '../mobile/mobile.module';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarModalComponent,
    MainPageComponent,
    SpinnerComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true,
    },
  ],
  imports: [CommonModule, CoreRoutingModule, SharedModule, MobileModule],
  exports: [SpinnerComponent],
})
export class CoreModule {}
