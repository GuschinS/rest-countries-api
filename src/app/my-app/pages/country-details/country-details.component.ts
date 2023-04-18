import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { RestCountries } from '../../interfaces/rest-countries';
import { RestCountriesService } from '../../services/rest-countries.service';
import { RegionIdService } from '../../services/region-id.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent implements OnInit {
  country!: RestCountries;
  currenciesKey!: string;
  currencies!: string;
  flag?: string;
  regionId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private restCountriesService: RestCountriesService,
    private regionIdService: RegionIdService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((params) =>
          this.restCountriesService.getCountryByCode(params['id'])
        )
      )
      .subscribe((country) => {
        this.country = country[0];
        this.flag = country[0].flags.png;
        this.currenciesKey = Object.keys(this.country.currencies)[0];
        this.currencies = country[0].currencies[this.currenciesKey].symbol;
      });
    this.regionIdService.id.subscribe((value) => {
      this.regionId = value;
    });
  }
}
