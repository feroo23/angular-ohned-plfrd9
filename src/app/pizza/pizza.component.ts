import { Component, OnInit } from '@angular/core';
import { Pizza } from '../model/pizza';


@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  editPizza?: Pizza;

  constructor() { }

  ngOnInit() {
  }

  pizza :Pizza;

  editpizza (pizza:Pizza){
    this.editPizza= pizza;
  }

  savepizza () {
    this.editpizza = null;
  }

  deletepizza (pizza: Pizza) {
    this.pizza
  }


}