import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap, tap } from 'rxjs';
import {
  areasInIsraelUrl,
  getCityByNameFirst10Url as getCitiesByNameFirst10Url,
  govtDataStoreSearchUrl,
} from 'src/assets/api/api.url';
import {
  govtApi_fields_cities,
  govtApi_fields_streets,
  govtApi_limit_10,
  govtApi_resourceId_streets_cities,
} from 'src/assets/mock/data/mock.data';
import {
  GovtModel,
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

  // getStreetsByCityAndKeyword(
  //   city: string,
  //   keyword: string
  // ): Observable<string[]> {
  //   return this.http
  //     .get<GovtDataStoreSearch>(
  //       govtDataStoreSearchUrl +
  //         govtApi_streets_resourceId +
  //         govtApi_fields_streets +
  //         govtApi_plain_false +
  //         govtApi_limit_10 +
  //         '&q=' +
  //         `{"שם_ישוב": "${city}:*","שם_רחוב": "${keyword}:*"}`
  //     )
  //     .pipe(
  //       map((res) => res.result),
  //       map((res) => res.records),
  //       map((res) => res.map((v) => v.שם_רחוב))
  //     );
  // }

  getFromGovtApiByFieldAndQuery(
    query: string,
    field: string
  ): Observable<GovtDataStoreSearch> {
    return this.http.get<GovtDataStoreSearch>(
      govtDataStoreSearchUrl +
        govtApi_resourceId_streets_cities +
        field +
        govtApi_limit_10 +
        '&q=' +
        // +`{"שם_ישוב":"${keyword}:*"}`
        query
    );
  }

  autoCompleteByFieldAndQuery(
    fieldKey: keyof GovtDataStoreSearchResultRecords,
    query: string
  ) {
    let field: string;
    switch (fieldKey) {
      case 'שם_ישוב':
        field = govtApi_fields_cities;
        break;
      case 'שם_רחוב':
        field = govtApi_fields_streets;
        break;
    }
    return this.getFromGovtApiByFieldAndQuery(query, field).pipe(
      map((res) => res.result),
      map((res) => res.records),
      map((res) => res.map((v) => v[fieldKey])),
      // tap((v) => console.log(v)),
      map((res) => [...new Set(res)]),
      map((res) => res.map((i) => i.trim()))
    );
  }

  // autoCompleteCities$(keyword: string): Observable<string[]> {
  //   return this.getCitiesByKeyword(keyword).pipe(
  //     map((res) => res.result),
  //     map((res) => res.records),
  //     map((res) => res.map((v) => v.שם_ישוב)),
  //     map((res) => [...new Set(res)]),
  //     map((res) => res.map((i) => i.trim()))
  //   );
  // }

  // autoCompleteCities$(keyword: string): Observable<string[]> {
  //   return this.getCitiesByKeyword(keyword).pipe(
  //     map((res) => res.result),
  //     map((res) => res.records),
  //     map((res) => res.map((v) => v.שם_ישוב)),
  //     map((res) => [...new Set(res)]),
  //     map((res) => res.map((i) => i.trim()))
  //   );
  // }
}
