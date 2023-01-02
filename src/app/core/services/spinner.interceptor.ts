import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { SpinnerService } from './spinner.service';
import { getCityByNameFirst10Url } from 'src/assets/api/api.url';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  constructor(private spinnerService: SpinnerService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url.startsWith(getCityByNameFirst10Url)) {

    } else {
      this.spinnerService.activateGlobalSpinner();
    }
    return next
      .handle(request)
      .pipe(finalize(() => this.spinnerService.deactivateGlobalSpinner()));
  }
}
