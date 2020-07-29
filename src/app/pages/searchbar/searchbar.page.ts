import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  name : string = '';
  notFound : string;
  people : any = [];
  filteredPeople : any;
  nomes : any = ['Raphael', 'Carlos', 'Jean', 'Maria', 'Joaquim', 'Queren', 'Mariana', 'Vanessa', 'Manoel', 'Leticia'];

  private getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  constructor() {
    for (let index = 1; index <= 10; index++) {
      this.people.push({
        id: index, 
        age: this.getRandomInt(10, 80), 
        name: this.nomes[index - 1]
      });
    }
    this.filteredPeople = this.people;    
  }
  
  ngOnInit() { }

  filterName(event){
    this.name = event.target.value.toLowerCase();
    this.filteredPeople = this.filterPerson(this.name);
    this.filteredPeople.length == 0 ? this.notFound = "Nada foi encontrado" : this.notFound = null;
  }

  filterPerson(name){
    this.filteredPeople = this.people;
    return this.filteredPeople.filter((person) =>{
      return person.name.toLowerCase().includes(name.toLowerCase());
    })
  }

}
