import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { areasInIsraelUrl } from 'src/assets/api/api.url';
import {
  GovtApiModel,
} from '../models/govtApiAreaModel.model';
@Injectable({
  providedIn: 'root',
})
export class GovtAPIService {
  constructor(private http: HttpClient) {}

  getIsraeliAreasOfLiving(): Observable<string[]> {
    return this.http
      .get<GovtApiModel>(areasInIsraelUrl)
      .pipe(switchMap((resp) => of(resp.data.area))).pipe(
        map(areaData => areaData.map(item => item.text))
      )
  }
}
