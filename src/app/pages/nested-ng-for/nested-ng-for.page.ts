import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested-ng-for',
  templateUrl: './nested-ng-for.page.html',
  styleUrls: ['./nested-ng-for.page.scss'],
})
export class NestedNgForPage implements OnInit {

  array : any = [];

  constructor() { }

  ngOnInit() {
    this.array = {
      'credito': [{descricao: 'cartao visa', valor: 150},{descricao: 'fdp', valor: 150},{descricao: 'fdp', valor: 150},{descricao: 'fdp', valor: 150}], 
      'debito': [{descricao: 'cartao visa', valor: 1500},{descricao: 'fdp', valor: 1520},{descricao: 'fdp', valor: 11150},{descricao: 'fdp', valor: 150}], 
      'dinheiro': [{descricao: 'fdp', valor: 150},{descricao: 'fdp', valor: 150},{descricao: 'fdp', valor: 150},{descricao: 'fdp', valor: 150}], 
      'notas': [{descricao: 'asdasdasd', valor: 250}],
      'moedas': [{descricao: 'nome', valor: 123}]
    };
    console.log(this.array);
  }

}
