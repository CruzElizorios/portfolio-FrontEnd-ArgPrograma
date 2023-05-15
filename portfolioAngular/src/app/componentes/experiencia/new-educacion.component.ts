import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EducacionModel } from 'src/app/models/educacion-model';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  nombreEd: string= '';
  duracionEd: string= '';
  descripcionEd: string= '';
  
  constructor(private sEducacion: EducacionService,private router: Router){}
  
  ngOnInit(): void {
  }

  onCreateEdu():void{
    const edu = new EducacionModel (this.nombreEd, this.duracionEd, this.descripcionEd);
    this.sEducacion.guardar(edu).subscribe(data =>{
      alert("Educacion agregada");
      this.router.navigate(['']);
    })
  }

}
