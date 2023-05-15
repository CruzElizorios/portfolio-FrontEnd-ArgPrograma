export class TrabajoModel {
    id?: number;
    nombreE: string;
    duracionE: string;
    descripcionE: string;

    constructor(nombreE: string, duracionE: string, descripcionE: string){
        this.nombreE = nombreE;
        this.duracionE = duracionE;
        this.descripcionE = descripcionE;
    }
}