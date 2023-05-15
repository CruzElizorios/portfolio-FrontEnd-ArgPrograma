import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrabajoModel } from 'src/app/models/trabajos.model';
import { SExperienciaService } from 'src/app/services/s-experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})

export class EditExperienciaComponent implements OnInit {
  expLab: TrabajoModel = null;

  constructor(private sExperiencia: SExperienciaService, private activateRouter: ActivatedRoute, private router: Router){
  }
  
  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.sExperiencia.infoExp(id).subscribe(
      data=>{
        this.expLab = data;
      }
    )
  }

  onUpdate():void{
    const id = this.activateRouter.snapshot.params['id'];
    this.sExperiencia.actualizar(id, this.expLab).subscribe(
      data =>{
        alert("cambios guardados");
        this.router.navigate(['']);
      }
    )
  }
}
