export class Skill {
    id: number;
    nombreSK: string;
    porcentaje: number;

    constructor(nombreSK: string, porcentaje: number){
        this.nombreSK = nombreSK;
        this.porcentaje = porcentaje;
    }
}
