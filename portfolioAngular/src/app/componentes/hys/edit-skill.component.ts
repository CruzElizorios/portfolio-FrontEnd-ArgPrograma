import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  skill: Skill = null;

  constructor(
    private skillS: SkillService,
    private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.infoHys(id).subscribe(
      data => {
        this.skill = data;
      })
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.actualizar (id, this.skill).subscribe(
      data => {
        this.router.navigate(['']);
      }
    )
  }
}