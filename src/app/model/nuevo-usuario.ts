export class NuevoUsuario {
    nombre: string;
    nombreUsuario: string;
    email: string;
    password: string;
    authorities!: string[];

    constructor(nombreUsuario: string, nombre: string, email: string, password: string, authorities: string[]){
        this.nombreUsuario = nombreUsuario;
        this.nombre= nombre;
        this.password= password;
        this.email= email;
    }
}
