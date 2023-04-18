import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionComponent } from './my-app/pages/region/region.component';
import { CountryComponent } from './my-app/pages/country/country.component';
import { CountryDetailsComponent } from './my-app/pages/country-details/country-details.component';

const routes: Routes = [
  { path: 'regions/:regionId', component: CountryComponent },
  { path: 'country/:id', component: CountryDetailsComponent },
  { path: '', component: RegionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
