import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  private spinner$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor() {}

  get spinner(): Observable<boolean> {
    return this.spinner$.asObservable();
  }

  activateSpinner() {
    this.spinner$.next(true);
  }

  deactivateSpinner() {
    this.spinner$.next(false);
  }
}
