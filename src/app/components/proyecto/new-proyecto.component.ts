import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/service/image.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  proyecto: string
  url: string 
  imagen: string
  descripcion: string 


  constructor(private activatedRouter: ActivatedRoute,
    private sproye: ProyectoService,
    private router: Router,
    public imageService: ImageService){}
    
  ngOnInit(): void {}

  onCreate(): void{
    const proyecto= new Proyecto( this.proyecto, this.descripcion, this.url, this.imagen);
    this.sproye.save(proyecto).subscribe(data=>{
      alert("Proyecto añadido");
      this.router.navigate(['']);
    }, err =>{
      alert("Fallo");
      this.router.navigate(['']);
    }
    )
  }

  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params[`id`];
    const name = "proyecto_" + id;
    this.imageService.uploadImage($event, name)
  }

  
  
  }
/*
  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params[`id`];
    const name = "proyecto_" + id;
  
    // Verificar si no hay una imagen actualmente
    if (!$event) {
      // Ruta o URL de la imagen inicial
      const imageUrlInicial = 'https://example.com/imagen-inicial.jpg';
  
      // Llamar al método para cargar la imagen inicial
      this.imageService.uploadImageFromUrl(imageUrlInicial, name);
    } else {
      // Llamar al método para cargar la imagen seleccionada
      this.imageService.uploadImage($event, name);
    }
}*/
