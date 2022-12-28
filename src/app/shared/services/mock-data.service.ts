import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import {
  categoryListings,
  forsaleListingSubCategories,
} from 'src/assets/mock/data/mock.data';
import { CategoryBoxModel } from '../models/category-box.model';

@Injectable({
  providedIn: 'root',
})
export class MockDataService {
  constructor() {}

  getSelectListingCategories(): Observable<CategoryBoxModel[]> {
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
    return of(boxModel).pipe(delay(0));
  }

  getForsaleSubCategories(): Observable<CategoryBoxModel[]> {
    let boxModel = forsaleListingSubCategories.map(
      (c) =>
        <CategoryBoxModel>{
          iconImgSrc: c.iconImgSrc,
          titleText: c.title,
          subtitleText: c.subtitle,
        }
    );
    return of(boxModel);
  }
}
