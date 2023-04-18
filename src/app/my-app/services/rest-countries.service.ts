import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { RestCountries } from '../interfaces/rest-countries';

@Injectable({
  providedIn: 'root',
})
export class RestCountriesService {
  private apiUrl = 'https://restcountries.com/v3.1';

  getHttpParams() {
    return new HttpParams().set('fields', 'name,capital,cca2,flags,population');
  }

  constructor(private http: HttpClient) {}

  getCountriesByName(name: string): Observable<RestCountries[]> {
    const url = `${this.apiUrl}/name/${name}`;

    return this.http
      .get<RestCountries[]>(url, { params: this.getHttpParams() })
      .pipe(tap(console.log));
  }

  getCountriesByCapital(name: string): Observable<RestCountries[]> {
    const url = `${this.apiUrl}/capital/${name}`;

    return this.http
      .get<RestCountries[]>(url, { params: this.getHttpParams() })
      .pipe(tap(console.log));
  }

  getCountryByCode(code: string): Observable<RestCountries[]> {
    const url = `${this.apiUrl}/alpha/${code}`;

    // return this.http.get<Country[]>(url).pipe(tap(console.log));
    return this.http
      .get<RestCountries[]>(url)
      .pipe(map((response) => response));
  }

  getCountriesByRegion(region: string): Observable<RestCountries[]> {
    const url = `${this.apiUrl}/region/${region}`;

    return this.http
      .get<RestCountries[]>(url, { params: this.getHttpParams() })
      .pipe(tap(console.log));
  }
}
