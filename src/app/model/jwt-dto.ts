export class JwtDto {
    token: string;
    type: string;
    nombreUsuario: string;
    authorities!: string[];

    constructor(nombreUsuario: string, authorities: string[], token: string, type: string){
        this.nombreUsuario = nombreUsuario;
        this.token= token;
        this.type= type;
       

        
    }
}

