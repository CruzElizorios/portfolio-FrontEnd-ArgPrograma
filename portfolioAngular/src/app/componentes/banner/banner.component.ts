import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  nombre: string = 'Iñaki C. Elizondo Rios';
  imgEstandar: string ='../../../assets/img/draw/programando_designer.svg';
  clasePerfil = 'banner-container-imagen-perfil vacio';
  
  mostrarfoto(){
    if (this.clasePerfil === 'banner-container-imagen-perfil') {
      this.clasePerfil = 'banner-container-imagen-perfil vacio'
    } else {
      this.clasePerfil = 'banner-container-imagen-perfil'
    }
  }

}
