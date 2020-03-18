import { Component, OnInit, Input } from '@angular/core';
import { MapPoint } from 'src/app/shared/models/map-point';

@Component({
  selector: 'app-map-point-form',
  templateUrl: './map-point-form.component.html',
  styleUrls: ['./map-point-form.component.css']
})
export class MapPointFormComponent {
 
  @Input() mapPoint: MapPoint;
  @Input() mapPoint2: MapPoint;
  @Input() choiceResult: string;

  constructor() {
  }

}
