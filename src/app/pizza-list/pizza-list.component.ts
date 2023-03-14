import { HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  Show = false; 

 openpop(){
   this.Show = true;
 } 

 closepop(){
   this.Show = false;
 }
 
  constructor() { }

  ngOnInit() {
  }

  infos(){

  }

  pizzagr(){
    
  }

}