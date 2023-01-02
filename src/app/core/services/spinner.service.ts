import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  private globalSpinner$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor() {}

  get spinner(): Observable<boolean> {
    return this.globalSpinner$.asObservable();
  }

  activateGlobalSpinner() {
    this.globalSpinner$.next(true);
  }

  deactivateGlobalSpinner() {
    this.globalSpinner$.next(false);
  }
}
