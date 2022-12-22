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
  {
    path: 'auth/login',
    loadComponent: () => {
      if (isMobileVersion()) {
        return import(
          '../mobile/standalones/mobile-authentication-page/mobile-authentication-page.component'
        ).then((c) => c.MobileAuthenticationPageComponent);
      }
      return import(
        '../modules/authentication-page/authentication-page.component'
      ).then((c) => c.AuthenticationPageComponent);
    },
  },
  {
    path: 'auth/register',
    loadComponent: () => {
      if (isMobileVersion()) {
        return import(
          '../mobile/standalones/mobile-authentication-page/mobile-authentication-page.component'
        ).then((c) => c.MobileAuthenticationPageComponent);
      }
      return import(
        '../modules/authentication-page/authentication-page.component'
      ).then((c) => c.AuthenticationPageComponent);
    },
  },
  {
    path: 'publish',
    loadChildren: () => {
      return import('../modules/publish/publish-page.module').then(
        (m) => m.PublishPageModule
      );
    },
  },

  {
    path: 'auth',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: 'realestate/forsale', pathMatch: 'full' },
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
export class CoreRoutingModule {}
