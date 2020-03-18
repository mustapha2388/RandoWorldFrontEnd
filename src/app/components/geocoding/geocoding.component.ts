import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NominatimResponse } from 'src/app/shared/models/nominatim-response';
import { NominatimService } from 'src/app/services/nominatim.service';

@Component({
  selector: 'app-geocoding',
  templateUrl: './geocoding.component.html',
  styleUrls: ['./geocoding.component.css']
})
export class GeocodingComponent {

  @Output() onSearch = new EventEmitter();
  @Output() onSearch2 = new EventEmitter();
  searchResults: NominatimResponse[];
  searchResults2: NominatimResponse[];

  constructor(private nominatimService: NominatimService) {
  }

  addressLookup(address: string) {
    if (address.length > 3) {
      this.nominatimService.addressLookup(address).subscribe(results => {
        this.searchResults = results;
        this.searchResults2 = results;
      });
    } else {
      this.searchResults = [];
      this.searchResults2 = [];
    }
    this.onSearch.emit(this.searchResults);
    this.onSearch2.emit(this.searchResults2);
  }

}
