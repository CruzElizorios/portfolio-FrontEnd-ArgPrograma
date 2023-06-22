import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/models/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  
  persona: persona = null;
  constructor(public personaService: PersonaService, private tokenService: TokenService){}
  isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  
  clasePerfil = 'banner-container-imagen-perfil vacio';
  mostrarfoto(){
    if (this.clasePerfil === 'banner-container-imagen-perfil') {
      this.clasePerfil = 'banner-container-imagen-perfil vacio'
    } else {
      this.clasePerfil = 'banner-container-imagen-perfil'
    }
  }
  cargarPersona(): void{
    this.personaService.detalles(1).subscribe(
      data => {
        this.persona = data;
      }
    )
  }
  toContacto(){
    document.getElementById("toContacto").scrollIntoView({behavior:"smooth"})
  }
}
