import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {


   constructor(private activatedRouter: ActivatedRoute,
   private personaService: PersonaService,
   private router: Router){}

  ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params[`id`];
      this.personaService.detail(id).subscribe(
        data=>{
          this.persona = data;
        }, err =>{
          alert("Error al modificar");
          this.router.navigate([''])
        }
      )
  
    }
  persona: persona = null;

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.update(id, this.persona).subscribe(
      data=>{
        this.persona = data;
        alert("Modificado con exito");
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar");
        this.router.navigate([''])
      }
    )

  }
  

  uploadImage($event:any){}
}
