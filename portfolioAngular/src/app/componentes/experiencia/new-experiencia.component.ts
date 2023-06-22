import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrabajoModel } from 'src/app/models/trabajos.model';
import { SExperienciaService } from 'src/app/services/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string= '';
  duracionE: string= '';
  descripcionE: string= '';
  
  constructor(private sExperiencia: SExperienciaService,private router: Router){
  }
  
  ngOnInit(): void {
  }

  onCreate():void{
    const expe = new TrabajoModel(this.nombreE, this.duracionE, this.descripcionE);
    this.sExperiencia.guardar(expe).subscribe(data =>{
      this.router.navigate(['']);
    })
  }

}
