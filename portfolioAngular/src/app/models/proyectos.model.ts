export class ProyectosModel {
    id?: number;
    titulo: string;
    tech: string;
    descrip: string;
    linkgit: string;
    linkpreview: string;
    img: string;

    constructor(titulo: string, tech: string, descrip: string, linkgit: string, linkpreview: string, img: string){
        this.titulo = titulo;
        this.tech = tech;
        this.descrip = descrip;
        this.linkgit = linkgit;
        this.linkpreview = linkpreview;
        this.img = img;
    }
}

