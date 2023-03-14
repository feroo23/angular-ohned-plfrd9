export class Pizza {

  constructor  (public id: number, 
    public name: string,
    public groesse: number, 
    public belag: any[], 
    public beschreibung: string,
    public zusatzstoffe: any[],
    public inhaltsstoffe: any[],
    public preis: number
    ){}

}
