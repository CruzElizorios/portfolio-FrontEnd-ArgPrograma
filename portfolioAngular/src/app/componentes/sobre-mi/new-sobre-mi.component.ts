import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SobremiModel } from 'src/app/models/sobremi.model';
import { SobremiService } from 'src/app/services/sobremi.service';

@Component({
  selector: 'app-new-sobre-mi',
  templateUrl: './new-sobre-mi.component.html',
  styleUrls: ['./new-sobre-mi.component.css']
})
export class NewSobreMiComponent {
  info: string;

  constructor(private infoServ: SobremiService, private router: Router) {}

  onCreate(): void{
    const descrp = new SobremiModel(this.info);
    this.infoServ.crear(descrp) .subscribe (
      data => {
        this.router.navigate(['']);
      }
    )
  }
}
