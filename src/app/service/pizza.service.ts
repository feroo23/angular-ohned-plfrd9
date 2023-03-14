import { Injectable } from '@angular/core';
import { Pizza } from '../model/pizza';

@Injectable()
export class PizzaService {

  constructor() { }
  pizzen: Pizza[] = [];

  


savePizza(pizza: Pizza){
  this.pizzen.push(pizza);
}

deletePizza(pizza: Pizza){
  this.pizzen = this.pizzen.filter(s => s !== pizza);
}

}