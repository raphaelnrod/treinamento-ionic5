import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinity-scroll',
  templateUrl: './infinity-scroll.page.html',
  styleUrls: ['./infinity-scroll.page.scss'],
})
export class InfinityScrollPage implements OnInit {

  numeros = [];
  limit = 20;

  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= 100; i++) {
      this.numeros.push(i);      
    }
  }

  showInfiniteScroll(ise : any) {
    setTimeout(() => {
      console.log("carregar mais 10 itens");
      this.limit += 10;
      ise.target.complete();
    }, 2000);    
  }

}
