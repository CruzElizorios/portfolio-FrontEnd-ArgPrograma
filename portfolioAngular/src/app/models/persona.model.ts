export class persona {
    id: number;
    nombre: string;
    apellido: string;
    subtitulo: string;
    img: string;

    constructor(id: number, nombre: string, apellido: string, subtitulo: string, img: string){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.subtitulo = subtitulo;
        this.img = img;
    }
}