import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublishListingSelectionPage } from './components/publish-listing-selection/listing-category-selection.component';
import { PublishPageComponent } from './pages/publish-page/publish-page.component';
import { SevenStepsPageComponent } from './pages/seven-steps-page/seven-steps-page.component';

const routes: Routes = [
  {
    path: '',
    component: PublishPageComponent,
    children: [
      { path: '', component: PublishListingSelectionPage },
      {
        path: 'forsale',
        component: SevenStepsPageComponent,
      },
    ],
  },
  // {path: '', redirectTo: '', pathMatch: ''},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublishPageRoutingModule {}
