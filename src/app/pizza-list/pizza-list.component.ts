import { HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pizza } from '../model/pizza';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  Show = false; 
  
  constructor() { }
  getPizzen(): Pizza[]{
    return this.pizzaService.pizzen
  }

 openpop(){
   this.Show = true;
 } 

 closepop(){
   this.Show = false;
 }

  infos(){

  }

  pizzagr(){
    
  }
  [x: string]: any;

  

  ngOnInit() {
  }


  findPizzaByID(id: number, pizzen: Pizza[]){
    let valueToFind = id;
    let foundValue = pizzen.find((pizza) => pizza.id === valueToFind);

    if(foundValue) {
      return foundValue;
    }
    else(
      console.log("Datei nicht gefunden")
    )

  }

  findPizzaByName(name: string,pizzen: Pizza[]){
  let valueToFind = name;
  let foundValue = pizzen.find((pizza)=> pizza.name === valueToFind)

  if(foundValue){
    return foundValue;
  }
  else{
    console.log("Datei nicht gefunden")
  }


  }

  editPizza(idOldPizza:number,newPizza: Pizza, pizzen: Pizza[]){
    let foundValue = pizzen.find((pizza)=> pizza.id === idOldPizza)

    if(foundValue){
      this.pizzen.push(newPizza);
    }
    else(
      console.log("Datei nicht gefunden")
    )

  }

}