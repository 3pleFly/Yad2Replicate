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
import { Step2ViewComponent } from './templates/step2-view/step2-view.component';
import { Step1ViewComponent } from './templates/step1-view/step1-view.component';
import { Step3ViewComponent } from './templates/step3-view/step3-view.component';
import { Step4ViewComponent } from './templates/step4-view/step4-view.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Step1Component } from './components/steps/step1/step1.component';
import { Step2Component } from './components/steps/step2/step2.component';
import { Step3Component } from './components/steps/step3/step3.component';
import { Step4Component } from './components/steps/step4/step4.component';
import { Step5Component } from './components/steps/step5/step5.component';
import { Step6Component } from './components/steps/step6/step6.component';
import { Step7Component } from './components/steps/step7/step7.component';
import { NavButtonsComponent } from './components/nav-buttons/nav-buttons.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { TitleComponent } from './components/title/title.component';
import { StepContainerComponent } from './components/step-container/step-container.component';
import { SevenStepsComponent } from './pages/seven-steps/seven-steps.component';

@NgModule({
  declarations: [
    PublishNavbarComponent,
    PublishListingSelectionPage,
    CategoriesListingComponent,
    PublishPageModal,
    SevenStepsPageComponent,
    PublishPageComponent,
    CollapsedStepComponent,
    Step2ViewComponent,
    Step3ViewComponent,
    Step4ViewComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    Step5Component,
    Step6Component,
    Step7Component,
    NavButtonsComponent,
    TooltipComponent,
    TitleComponent,
    StepContainerComponent,
    SevenStepsComponent,
  ],
  imports: [CommonModule, PublishPageRoutingModule, SharedModule, FormsModule, ReactiveFormsModule],
})
export class PublishPageModule {}
