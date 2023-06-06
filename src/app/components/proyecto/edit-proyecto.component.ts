import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/service/image.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})

export class EditProyectoComponent implements OnInit {

    proye: Proyecto = null;

   constructor(private activatedRouter: ActivatedRoute,
   private sproye: ProyectoService,
   private router: Router,
   public imageService: ImageService){}

  ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params[`id`];
      this.sproye.detail(id).subscribe(
        data=>{
          this.proye = data;
        }, err =>{
          alert("Error al modificar");
          this.router.navigate([''])
        }
      )
  
   }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.proye.imagen = this.imageService.url
    this.sproye.update(id, this.proye).subscribe(
      data=>{
        this.proye = data;
        alert("Modificado con exito");
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar");
        this.router.navigate([''])
      }
    )
 
  }
  

  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params[`id`];
    const name = "proyecto_" + id;
    this.imageService.uploadImage($event, name)
  }
}


