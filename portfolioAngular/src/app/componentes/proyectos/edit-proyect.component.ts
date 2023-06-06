import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectosModel } from 'src/app/models/proyectos.model';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-edit-proyect',
  templateUrl: './edit-proyect.component.html',
  styleUrls: ['./edit-proyect.component.css']
})
export class EditProyectComponent implements OnInit{
  proyecto:ProyectosModel= null;

  constructor(
    private proyectService: ProyectosService,
    private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectService.infoProyectos(id).subscribe(
      data => {
        this.proyecto = data;
      })
  }
  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectService.actualizar(id, this.proyecto).subscribe(
      data => {
        this.router.navigate(['']);
      }
    )
  }

}
