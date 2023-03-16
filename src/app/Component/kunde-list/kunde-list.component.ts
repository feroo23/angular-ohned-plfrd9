import { Component, OnInit } from '@angular/core';
import { Kunde } from '../../model/kunde';

@Component({
  selector: 'app-kunde-list',
  templateUrl: './kunde-list.component.html',
  styleUrls: ['./kunde-list.component.css']
})
export class KundeListComponent implements OnInit {
  
[x: string]: any;

  constructor() { }

  ngOnInit() {
  }
/*
  
  getKunden():Kunde[] {
    return this.pizzaService.kunden
  }

  getKundeByTel(tel: number, kunden: Kunde[]){
    let valueToFind = tel;
    let foundValue = kunden.find((kunde) => kunde.tel === valueToFind);

    if(foundValue) {
      return foundValue;
    }
    else(
      console.log("Datei nicht gefunden")
    )
  }

  saveKunde(kunde: Kunden, kunden: Kunden[]){
    if(kunden.has(kunde){
      console.log("Datei Exisitert bereits");
    }
    else{
      kunden.push(kunde);
    }
  }
  */



}