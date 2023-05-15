export class EducacionModel {
    id?: number;
    nombreEd: string;
    duracionEd: string;
    descripcionEd: string;

    constructor(nombreEd: string, duracionEd: string, descripcionEd: string){
        this.nombreEd = nombreEd;
        this.duracionEd = duracionEd;
        this.descripcionEd = descripcionEd;
    }
}
