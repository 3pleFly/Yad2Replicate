import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { PublishPageRoutingModule } from './publish-page-routing.module';
import { PublishNavbarComponent } from './components/publish-navbar/publish-navbar.component';
import { PublishListingSelectionPage } from './components/publish-listing-selection/listing-category-selection.component';
import { CategoriesListingComponent } from './components/categories-listing.component/categories-listing.component';
import { PublishPageModal } from './components/publish-page-modal/publish-page-modal.component';
import { SevenStepsPageComponent } from './pages/seven-steps-page/seven-steps-page.component';
import { PublishPageComponent } from './pages/publish-page/publish-page.component';
import { CollapsedStepComponent } from './components/collapsed-step/collapsed-step.component';
import { SevenstepService } from './services/sevenstep.service';
import { Step2ViewComponent } from './templates/step2-view/step2-view.component';
import { StepComponent } from './components/step/step.component';
import { Step1ViewComponent } from './templates/step1-view/step1-view.component';
import { Step3ViewComponent } from './templates/step3-view/step3-view.component';
import { Step4ViewComponent } from './templates/step4-view/step4-view.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PublishNavbarComponent,
    PublishListingSelectionPage,
    CategoriesListingComponent,
    PublishPageModal,
    SevenStepsPageComponent,
    PublishPageComponent,
    CollapsedStepComponent,
    StepComponent,
    Step1ViewComponent,
    Step2ViewComponent,
    Step3ViewComponent,
    Step4ViewComponent,
  ],
  imports: [CommonModule, PublishPageRoutingModule, SharedModule, FormsModule],
  providers: [SevenstepService],
})
export class PublishPageModule {}
