import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/services/skill.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit{
    skill:Skill[] = [];

    constructor(private skillS: SkillService, private tokenService: TokenService) { }
    isLogged = false;
    
    ngOnInit(): void {
      this.cargarSkills();
      if(this.tokenService.getToken()){
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
    }

    cargarSkills(): void{
      this.skillS.lista().subscribe(
        data => {
          this.skill = data;
        }
      )
    }

    delete(id: number){
      if(id != undefined){
        this.skillS.eliminar(id) .subscribe(
          data => {
            this.cargarSkills();
          })
      }
    }
  
}
