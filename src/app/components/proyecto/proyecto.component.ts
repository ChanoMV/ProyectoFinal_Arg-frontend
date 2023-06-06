import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { VERSION, ViewChild, ElementRef } from "@angular/core"; 
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proyectos : Proyecto[]=[];
  isLogged = false;
  constructor(private tokenService: TokenService, private sproye:ProyectoService) { }

  
  ngOnInit(): void {
    this.cargarProyecto();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarProyecto():void{
    this.sproye.lista().subscribe(data => {
      this.proyectos=data
    });    
  }

  

  delete(id:number){
    if(id != undefined){
      this.sproye.delete(id).subscribe(
        data =>{
          alert("Proyecto eliminado correctamente")
          this.cargarProyecto();
        }, err =>{
          alert("no se pudo eliminar el proyecto")
        })
    }}    
}
