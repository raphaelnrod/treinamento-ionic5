import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  itens : any = [];

  constructor() { }

  ngOnInit() {
    for(let i = 1; i < 20; i++){
      this.itens.push("Item de numero " + i);
    }
  }

  doRefresh(event){
    console.log("Refresher chamado!");
    setTimeout(() => {
      console.log("Lista atualizada");
      event.target.complete();
    }, 2000);    
  }

}
