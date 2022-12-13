import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'realestate/forsale', pathMatch: 'full' },
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: 'realestate/forsale',
        loadComponent: () =>
          import(
            '../modules/real-estate-listing-page/real-estate-listing-page.component'
          ).then((c) => c.RealEstateListingPageComponent),
      },
      {
        path: 'search/realestate/forsale',
        loadComponent: () =>
          import(
            '../mobile/standalones/mobile-search-page/mobile-search-page.component'
          ).then((c) => c.MobileSearchPageComponent),
      },
    ],
  },
  { path: '**', redirectTo: 'realestate/forsale', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
