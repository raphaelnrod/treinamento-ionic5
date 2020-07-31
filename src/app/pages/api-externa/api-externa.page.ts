import { Component, OnInit } from '@angular/core';
import { CepService } from 'src/app/service/cep.service';

@Component({
  selector: 'app-api-externa',
  templateUrl: './api-externa.page.html',
  styleUrls: ['./api-externa.page.scss'],
})
export class ApiExternaPage implements OnInit {

  cep : string = '';
  result : any;

  constructor(private cepService: CepService) { }

  ngOnInit() {
  }

  getCep(){
    this.cepService.obterEndereco(this.cep)
      .then((json) => {
        this.result = json;
        console.log(json)
      })
      .catch((err) => {
        console.log(err)
      });
  }

}
