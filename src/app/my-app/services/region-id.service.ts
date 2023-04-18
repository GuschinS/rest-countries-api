import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegionIdService {
  public id = new BehaviorSubject<number>(0);
}
