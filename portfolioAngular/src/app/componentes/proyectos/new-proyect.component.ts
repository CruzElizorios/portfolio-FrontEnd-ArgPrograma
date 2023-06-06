import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectosModel } from 'src/app/models/proyectos.model';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-new-proyect',
  templateUrl: './new-proyect.component.html',
  styleUrls: ['./new-proyect.component.css']
})
export class NewProyectComponent {
  titulo: string;
  tech: string;
  descrip: string;
  linkgit: string;
  linkpreview: string;
  img: string;


  constructor(private proyectService: ProyectosService, private router: Router) { }

  onCreate(): void {
    const proyecto = new ProyectosModel(this.titulo, this.tech, this.descrip, this.linkgit, this.linkpreview, this.img);
    this.proyectService.guardar(proyecto).subscribe(
      data => {
        this.router.navigate(['']);
      }
    )
  }
}
