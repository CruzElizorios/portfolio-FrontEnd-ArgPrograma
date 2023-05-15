import { Component, OnInit } from '@angular/core';
import { EducacionModel } from 'src/app/models/educacion-model';
import { TrabajoModel } from 'src/app/models/trabajos.model';
import { EducacionService } from 'src/app/services/educacion.service';
import { SExperienciaService } from 'src/app/services/s-experiencia.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  
  expeList: TrabajoModel[] = [];
  eduList: EducacionModel[] = [];

  constructor(private sExperiencia: SExperienciaService,private sEducacion: EducacionService, private tokenService: TokenService ){}
  
  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }
  
  cargarExperiencia():void{
    this.sExperiencia.lista().subscribe(data =>{this.expeList = data;})
  }
  
  removeTrabajoDeLista(workToRemove: TrabajoModel):void{
    this.sExperiencia.borrar(workToRemove.id).subscribe(
      data=>{
        this.cargarExperiencia();
      }
    )
  }
 
  cargarEducacion():void{
    this.sEducacion.lista().subscribe(data =>{this.eduList = data;})
  }

  removeEducacionDeLista(educationToRemove: EducacionModel):void{
    this.sEducacion.borrar(educationToRemove.id).subscribe(
      data=>{
        this.cargarEducacion();
      }
    )
  }

}

