import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  standalone: true,
  selector: 'app-real-estate-listing-page',
  templateUrl: './real-estate-listing-page.component.html',
  styleUrls: ['./real-estate-listing-page.component.scss'],
  imports: [SharedModule, RouterModule]
})
export class RealEstateListingPageComponent {

  breadcrumbRoutes = ["נדל״ן למכירה"];

}
