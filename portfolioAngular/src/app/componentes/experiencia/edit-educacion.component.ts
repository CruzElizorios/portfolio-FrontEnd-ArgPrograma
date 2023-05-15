import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EducacionModel } from 'src/app/models/educacion-model';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  educ: EducacionModel = null; 

  constructor(private sEducacion: EducacionService, private activateRouter: ActivatedRoute, private router: Router){
  }
  
  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.sEducacion.infoEdu(id).subscribe(
      data=>{
        this.educ = data;
      }
    )
  }

  onUpdateEdu():void{
    const id = this.activateRouter.snapshot.params['id'];
    this.sEducacion.actualizar(id, this.educ).subscribe(
      data =>{
        alert("cambios guardados");
        this.router.navigate(['']);
      }
    )
  }
}
