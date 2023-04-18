import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { RegionComponent } from './pages/region/region.component';
import { CountryComponent } from './pages/country/country.component';
import { CountryDetailsComponent } from './pages/country-details/country-details.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PopUpComponent,
    RegionComponent,
    CountryComponent,
    CountryDetailsComponent,
  ],
  imports: [CommonModule, RouterLink],
})
export class MyAppModule {}
