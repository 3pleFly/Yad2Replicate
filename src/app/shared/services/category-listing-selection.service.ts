import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CategoryBoxModel } from '../models/category-box.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryListingSelectionService {
  private _selectedCategory: Subject<CategoryBoxModel | null> = new Subject<CategoryBoxModel | null>();
  public selectedCategory$: Observable<CategoryBoxModel | null> = this._selectedCategory.asObservable();

  constructor() { }

  setSelection(category: CategoryBoxModel | null) {
    this._selectedCategory.next(category);
  }

}
