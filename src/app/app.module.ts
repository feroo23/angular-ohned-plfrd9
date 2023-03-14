import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { KundeListComponent } from './kunde-list/kunde-list.component';
import { MenuComponent } from './menu/menu.component';
import { BestellungComponent } from './bestellung/bestellung.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { KundeComponent } from './kunde/kunde.component';
import { PizzaService } from './service/pizza.service';
import { PizzaComponent } from './pizza/pizza.component';




const appRoute: Routes= [
  {path: '', component: BestellungComponent},
  {path: 'Bestellung', component: BestellungComponent},
  {path: 'Kunde', component: KundeComponent},
  {path: 'Pizza', component: PizzaComponent}
]

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    RouterModule.forRoot(appRoute),
    
  ],
  declarations: [   
    AppComponent, 
    HelloComponent, 
    PizzaListComponent, 
    KundeListComponent, 
    MenuComponent, 
    BestellungComponent , 
    KundeComponent, 
    PizzaListComponent, 
    PizzaComponent,
    PizzaComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [PizzaService,
  ]
})

export class AppModule { }
