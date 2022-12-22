import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { PublishPageRoutingModule } from './publish-page-routing.module';
import { PublishNavbarComponent } from './components/publish-navbar/publish-navbar.component';
import { PublishListingSelectionPage } from './pages/publish-listing-selection-page/publish-page.component';
import { PublishPageContent } from './contents/publish-page-content/publish-page-content.component';
import { PublishPageModal } from './contents/publish-page-modal/publish-page-modal.component';
import { PublishPageContentMobile } from './contents/publish-page-content/publish-page-content-mobile.component';
import { SevenStepsPageComponent } from './pages/seven-steps-page/seven-steps-page.component';

@NgModule({
  declarations: [
    PublishNavbarComponent,
    PublishListingSelectionPage,
    PublishPageContent,
    PublishPageModal,
    PublishPageContentMobile,
    SevenStepsPageComponent,
  ],
  imports: [CommonModule, PublishPageRoutingModule, SharedModule],
})
export class PublishPageModule {}
