import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { categoryListings } from 'src/assets/mock/data/mock.data';
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
          labelText: c.title,
          subtitle: c.subtitle,
        }
    );
    return of(boxModel);
  }

}
