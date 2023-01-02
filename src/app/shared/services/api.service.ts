import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap, tap } from 'rxjs';
import {
  areasInIsraelUrl,
  getCityByNameFirst10Url as getCitiesByNameFirst10Url,
  govtDataStoreSearchUrl,
} from 'src/assets/api/api.url';
import {
  govtApi_fields_streets,
  govtApi_limit_10,
  govtApi_plain_false,
  govtApi_streets_resourceId,
} from 'src/assets/mock/data/mock.data';
import {
  GovtModel,
  GovtDataStoreQueryParams,
  GovtDataStoreSearch,
  GovtDataStoreSearchResultRecords,
} from '../models/govt-api.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getIsraeliAreasOfLiving(): Observable<string[]> {
    return this.http
      .get<GovtModel>(areasInIsraelUrl)
      .pipe(switchMap((resp) => of(resp.data.area)))
      .pipe(map((areaData) => areaData.map((item) => item.text)));
  }

  getStreetsByCityAndKeyword(
    query: string
  ): Observable<GovtDataStoreSearchResultRecords[]> {
    return this.http
      .get<GovtDataStoreSearch>(
        govtDataStoreSearchUrl +
          govtApi_streets_resourceId +
          govtApi_fields_streets +
          govtApi_plain_false +
          govtApi_limit_10 +
          '&q=' +
          query
      )
      .pipe(
        map((res) => res.result),
        map((res) => res.records)
      );
  }

  getCitiesByKeyword(
    keyword: string
  ): Observable<GovtDataStoreSearchResultRecords[]> {
    return this.http
      .get<GovtDataStoreSearch>(getCitiesByNameFirst10Url + keyword)
      .pipe(
        map((res) => res.result),
        map((res) => res.records)
      );
  }
}
