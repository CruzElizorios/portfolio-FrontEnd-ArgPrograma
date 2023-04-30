import { Component } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  
  trabajos = [
    {
    "id": 1,
    "title": "trabajo 1",
    "years": "2015-2016",
    "urlimage":"https://companieslogo.com/img/orig/ACN_BIG.D-871a76ce.png?t=1633439499",
    "description": "me encanta trabajar en este lugaaaaaaaaaaaaaaaaaaar aksjdksj aslkdfjsf alskjfalks sdksjdskj asdasd asd f hcxckv fd"
  },
  {
    "id": 2,
    "title": "trabajo 2",
    "years": "2015-2018",
    "urlimage":"../../../assets/img/logomerclibre.png",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt ullam nostrum excepturi impedit optio consectetur maxime nobis veniam nemo itaque!"
  },
  {
    "id": 3,
    "title": "Ing Industrial UCA",
    "years": "2023-2024",
    "urlimage":"https://companieslogo.com/img/orig/ACN_BIG.D-871a76ce.png?t=1633439499",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt ullam nostrum excepturi impedit optio consectetur maxime nobis veniam nemo itaque!"
  }
]
}
