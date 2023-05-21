import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SobremiModel } from 'src/app/models/sobremi.model';
import { SobremiService } from 'src/app/services/sobremi.service';

@Component({
  selector: 'app-edit-sobre-mi',
  templateUrl: './edit-sobre-mi.component.html',
  styleUrls: ['./edit-sobre-mi.component.css']
})
export class EditSobreMiComponent implements OnInit {
  info: SobremiModel = null;

  constructor(private infoServ: SobremiService, private activatedRouter: ActivatedRoute, private router: Router) { }
 
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.infoServ.infoSobremi(id).subscribe(
      data => {
        this.info = data;
      })
  }

  onUpdate() {
    const id = this.activatedRouter.snapshot.params['id'];
    this.infoServ.actualizar(id, this.info).subscribe(
      data => {
        this.router.navigate(['']);
      }
    )
  }
}
