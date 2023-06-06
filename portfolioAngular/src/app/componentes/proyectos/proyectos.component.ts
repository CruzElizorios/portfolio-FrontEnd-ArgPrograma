import { Component, OnInit, } from '@angular/core';
import { ProyectosModel } from 'src/app/models/proyectos.model';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectList:ProyectosModel[] = [];
  isLogged = false;
  constructor(private proyectosService: ProyectosService, private tokenService: TokenService) { }
  
  ngOnInit() {
    this.cargarProyect();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyect(): void{
    this.proyectosService.lista().subscribe(
      data => {
        this.proyectList = data;
      }
    )
  }
  delete(id: number){
    if(id != undefined){
      this.proyectosService.borrar(id).subscribe(
        data => {
          this.cargarProyect();
        })
    }
  }

}
