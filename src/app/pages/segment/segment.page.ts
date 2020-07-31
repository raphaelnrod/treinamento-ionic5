import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  selectedOption : any = 'frutas';

  constructor() { }

  ngOnInit() {
  }

  segmentChanged(event) {
    this.selectedOption  = event.detail.value;
  }

}
