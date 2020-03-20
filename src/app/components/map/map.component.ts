import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { DEFAULT_LATITUDE, DEFAULT_LONGITUDE, DEFAULT_LATITUDE2, DEFAULT_LONGITUDE2 } from 'src/app/app.constants';
import 'leaflet-routing-machine';
import { MapPoint } from 'src/app/shared/models/map-point';
import { NominatimResponse } from 'src/app/shared/models/nominatim-response';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map: L.Map;
  startPoint: MapPoint;
  finishPoint: MapPoint;
  options: L.MapOptions;
  lastLayer: any;
  routingControl: L.Routing.Control;

  results: NominatimResponse[];
  results2: NominatimResponse[];

  constructor() {
  }

  ngOnInit() {
    this.initializeDefaultMapPoint();
    this.initializeMapOptions();
  }

  initializeMap(map: L.Map) {
    this.map = map;
    this.createMarker();
    this.routingControl = L.Routing.control({
      waypoints: [
        L.latLng(this.startPoint.latitude, this.startPoint.longitude),
        L.latLng(this.finishPoint.latitude, this.finishPoint.longitude)
      ],
      routeWhileDragging: true,
    }).addTo(this.map);



  }

  getAddress(result: NominatimResponse, point: number) {
    this.updateMapPoint(result.latitude, result.longitude, point);
  }

  refreshSearchList(results: NominatimResponse[]) {
    this.results = results;
    console.log('just here');
  }


  refreshSearchList2(results2: NominatimResponse[]) {
    this.results2 = results2;
  }

  private initializeMapOptions() {
    this.options = {
      zoom: 5,
      layers: [
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'OSM' })
      ]
    };
  }

  private initializeDefaultMapPoint() {
    this.startPoint = {
      name: 'START',
      latitude: DEFAULT_LATITUDE,
      longitude: DEFAULT_LONGITUDE
    };

    this.finishPoint = {
      name: 'FINISH',
      latitude: DEFAULT_LATITUDE2,
      longitude: DEFAULT_LONGITUDE2
    };
  }

  public onMapClick(e: L.LeafletMouseEvent) {
    this.clearMap();
    this.updateMapPoint(e.latlng.lat, e.latlng.lng, 2);
    //this.createMarker();
  }

  private updateMapPoint(latitude: number, longitude: number, point: number, name?: string) {
    // this.routingControl.getWaypoints[point-1].setWaypoints(
    //   L.latLng(latitude, longitude));

    console.log('In updateMapPoint is: ' + point + ' ' + latitude + ' ' + longitude);
    const points: L.Routing.Waypoint[] = this.routingControl.getWaypoints();
    points[point - 1] = { latLng: L.latLng(latitude, longitude), name };

    this.routingControl.setWaypoints(points);


    if (point === 1) {
      this.startPoint = {
        latitude,
        longitude,
        name: name ? name : this.startPoint.name
      };
    } else {
      this.finishPoint = {
        latitude,
        longitude,
        name: name ? name : this.finishPoint.name
      };
    }

    console.log(this.startPoint);
    console.log(this.finishPoint);

  }

  private createMarker() {
    this.clearMap();
    const mapIcon = this.getDefaultIcon();
    const coordinates = L.latLng([this.startPoint.latitude, this.startPoint.longitude]);
    // this.lastLayer = L.marker(coordinates).setIcon(mapIcon).addTo(this.map);
    this.map.setView(coordinates, this.map.getZoom());
  }

  private getDefaultIcon() {
    return L.icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
    });
  }

  private clearMap() {
    if (this.map.hasLayer(this.lastLayer)) { this.map.removeLayer(this.lastLayer); }
  }

}
