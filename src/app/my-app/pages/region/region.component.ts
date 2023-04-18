import { Component } from '@angular/core';
import { regions } from '../../interfaces/regions';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
})
export class RegionComponent {
  regions = regions;
}
