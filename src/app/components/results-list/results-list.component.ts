import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NominatimResponse } from 'src/app/shared/models/nominatim-response';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent{

  @Input() choiceResult = '';

  @Input()
  results: NominatimResponse[];

  @Input()
  results2: NominatimResponse[];


  @Output()
  locationSelected = new EventEmitter();
  @Output()
  locationSelected2 = new EventEmitter();

  constructor() {
  }

  selectResult(result: NominatimResponse) {
    this.locationSelected.emit(result);
  }

  selectResult2(result: NominatimResponse) {
    this.locationSelected2.emit(result);
  }

}
