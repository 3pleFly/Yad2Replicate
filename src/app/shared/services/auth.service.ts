import { Injectable, resolveForwardRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private modalSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor() {}

  get modalSubject$() {
    return this.modalSubject.asObservable();
  }

  nextModalValue(value: any) {
    this.modalSubject.next(value);
  }

  getDelayedData(): Promise<string[]> {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(['hello', 'this', 'is', 'data']);
      }, 500)
    );
  }
}
