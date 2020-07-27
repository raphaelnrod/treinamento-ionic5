import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.page.html',
  styleUrls: ['./reorder.page.scss'],
})
export class ReorderPage implements OnInit {

  itens : any = [];

  constructor() { }

  ngOnInit() {
    for(let i = 1; i < 20; i++){
      this.itens.push("Item numero " + i);
    }
  }

  doReorder(event : any) {
    console.log('Da posição ', event.detail.from, 'para ', event.detail.to);
    event.detail.complete();
  }

}
