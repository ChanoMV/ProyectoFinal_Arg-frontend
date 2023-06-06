import { persona } from "./persona.model";

export class Proyecto{
    id?: number;
    proyecto: string;
    descripcion: string;
    imagen: string;
    url: string;
    

    constructor(proyecto: string, descripcion: string,imagen:string, url: string){
        this.proyecto = proyecto;
        this.descripcion= descripcion;
        this.imagen= imagen;
        this.url= url;
       
    }
}