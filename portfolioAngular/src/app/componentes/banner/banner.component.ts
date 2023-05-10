import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/models/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  
  persona: persona = new persona( 0,"","","");
  constructor(public personaService: PersonaService){}
  
  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }
  
  clasePerfil = 'banner-container-imagen-perfil vacio';
  mostrarfoto(){
    if (this.clasePerfil === 'banner-container-imagen-perfil') {
      this.clasePerfil = 'banner-container-imagen-perfil vacio'
    } else {
      this.clasePerfil = 'banner-container-imagen-perfil'
    }
  }

}
