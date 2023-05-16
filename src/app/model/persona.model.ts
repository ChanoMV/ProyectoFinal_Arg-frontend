export class persona{
    id?: number;
    nombreAC: string;
    apellidoAC: string;
    descripcionAC: string;
    img: string;

    constructor(nombreAC: string,apellidoAC: string,img: string,  descripcionAC: string){
        this.nombreAC = nombreAC;
        this.apellidoAC= apellidoAC;
        this.descripcionAC=descripcionAC;
        this.img= img;
    }
}