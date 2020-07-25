import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logScrollStart(){
    console.log("Começou a movimentar o scroll")
  }
  logScrollEnd(){
    console.log("Parou de movimentar o scroll")
  }
}
