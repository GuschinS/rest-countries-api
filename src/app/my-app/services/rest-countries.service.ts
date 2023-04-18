import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { RestCountries } from '../interfaces/rest-countries';

@Injectable({
  providedIn: 'root',
})
export class RestCountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  getCountryByCode(code: string): Observable<RestCountries[]> {
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.http
      .get<RestCountries[]>(url)
      .pipe(map((response) => response));
  }

  getCountriesByRegion(region: string): Observable<RestCountries[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.http
      .get<RestCountries[]>(url)
      .pipe(map((response) => response));
  }
}
