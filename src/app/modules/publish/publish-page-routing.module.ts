import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublishListingSelectionPage } from './pages/publish-listing-selection-page/publish-page.component';
import { SevenStepsPageComponent } from './pages/seven-steps-page/seven-steps-page.component';

const routes: Routes = [
  // { path: '', redirectTo: 'publish', pathMatch: 'full' },
  { path: '', component: PublishListingSelectionPage },
  { path: '**', redirectTo: '', pathMatch: 'full' },
  // {path: '', redirectTo: '', pathMatch: ''},
  // {path: '', redirectTo: '', pathMatch: ''},
];

function isMobileVersion(): boolean {
  if (window.innerWidth > 1100) {
    return false;
  }
  return true;
}

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublishPageRoutingModule {

  myLet: boolean = false;
}
