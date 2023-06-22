import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/models/persona.model';
import { PersonaService } from 'src/app/services/persona.service';


@Component({
  selector: 'app-edit-banner',
  templateUrl: './edit-banner.component.html',
  styleUrls: ['./edit-banner.component.css']
})
export class EditBannerComponent implements OnInit{
  pers: persona = null;

  constructor(private sPersona: PersonaService, private activateRouter: ActivatedRoute, private router: Router){}
  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.sPersona.detalles(id).subscribe(
      data=>{
        this.pers = data;
      }
    )
  }
  onUpdate():void{
    const id = this.activateRouter.snapshot.params['id'];
    this.sPersona.actualizar(id, this.pers).subscribe(
      data =>{
        this.router.navigate(['']);
      }
    )
  }

}
