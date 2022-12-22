import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { categoryListings } from 'src/assets/mock/data/mock.data';
import { CategoryListing } from '../models/categoryListing.model';
import { CategoryBoxModel } from '../models/viewmodels/category-box.model';

@Injectable({
  providedIn: 'root',
})
export class MockDataService {
  categoryListings: CategoryListing[] = categoryListings;

  constructor() {}

  getCategoryBoxTypes(): Observable<CategoryBoxModel[]> {
    let index = 1;
    let boxModel = categoryListings.map(
      (c) =>
        <CategoryBoxModel>{
          id: index++,
          iconImgSrc: c.iconImgSrc,
          titleText: c.title,
          subtitleText: c.subtitle,
        }
    );
    return of(boxModel);
  }
}
