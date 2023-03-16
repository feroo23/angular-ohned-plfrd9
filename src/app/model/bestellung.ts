import { Adresse } from "./adresse"
import { Getraenke } from "./getraenke"
import { Kunde } from "./kunde"

export class Bestellung {
  constructor(
  public Id : number,
  public Adresse : Adresse,
  public Pizza: any[],
  public Kunde : Kunde,
  public Getraenke: Getraenke
  ){}
}