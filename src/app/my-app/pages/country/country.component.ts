import { Component, OnInit } from '@angular/core';
import { RestCountries } from '../../interfaces/rest-countries';
import { ActivatedRoute } from '@angular/router';
import { Regions, regions } from '../../interfaces/regions';
import { RestCountriesService } from '../../services/rest-countries.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  region: Regions | undefined;

  selectedRegion: string = '';

  countries: RestCountries[] = [];

  constructor(
    private restCountriesService: RestCountriesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const regionIdFromRoute = Number(routeParams.get('regionId'));
    this.region = regions.find((region) => region.id === regionIdFromRoute);

    let reg: string;

    switch (regionIdFromRoute) {
      case 1:
        reg = 'africa';
        break;
      case 2:
        reg = 'america';
        break;
      case 3:
        reg = 'asia';
        break;
      case 4:
        reg = 'europe';
        break;
      default:
        reg = 'oceania';
        break;
    }

    this.selectedRegion = reg;

    this.restCountriesService
      .getCountriesByRegion(this.selectedRegion)
      .subscribe({
        next: (reg) => {
          this.countries = reg;
        },
      });
  }
}
