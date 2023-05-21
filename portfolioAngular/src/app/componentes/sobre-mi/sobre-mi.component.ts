import { Component, OnInit } from '@angular/core';
import { SobremiModel } from 'src/app/models/sobremi.model';
import { SobremiService } from 'src/app/services/sobremi.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit{
  infoList:SobremiModel[] = [];
  constructor(private infoServ: SobremiService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarInfos();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarInfos(): void{
    this.infoServ.lista().subscribe(
      data => {
        this.infoList = data;
      }
    )
  }
  delete(id: number){
    if(id != undefined){
      this.infoServ.borrar(id).subscribe(
        data => {
          this.cargarInfos();
        })
    }
  }
}
