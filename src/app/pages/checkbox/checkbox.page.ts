import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

  meses : any[] = [
    { nomeMes: 'Janeiro', valor: 1, marcado: false},
    { nomeMes: 'Fevereiro', valor: 2, marcado: false},
    { nomeMes: 'Março', valor: 3, marcado: true},
    { nomeMes: 'Abril', valor: 4, marcado: false},
    { nomeMes: 'Maio', valor: 5, marcado: false},
    { nomeMes: 'Junho', valor: 6, marcado: true},
    { nomeMes: 'Julho', valor: 7, marcado: true}
  ];

  constructor() { }

  ngOnInit() {
  }

  exibirMeses(){
    console.log(this.meses);
  }

}
