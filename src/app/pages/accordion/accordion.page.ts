import { Component, OnInit, ViewChild } from "@angular/core";
import { MbscFormOptions, MbscListviewOptions }  from '@mobiscroll/angular';

@Component({
  selector: "app-accordion",
  templateUrl: "./accordion.page.html",
  styleUrls: ["./accordion.page.scss"],
})
export class AccordionPage implements OnInit {

  @ViewChild("adeline")
  adeline: any;
  @ViewChild("carl")
  carl: any;
  @ViewChild("tinker")
  tinker: any;
  @ViewChild("barry")
  barry: any;
  
  constructor() {}

  ngOnInit() {}


  formSettings: MbscFormOptions = {
    theme: "ios",
    themeVariant: "light",
  };

  listviewSettings: MbscListviewOptions = {
    swipe: false,
    enhance: true,
  };
}
