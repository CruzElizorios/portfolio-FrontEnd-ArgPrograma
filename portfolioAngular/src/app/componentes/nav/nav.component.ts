import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  claseNav = "nav-lista ocultar";

  desplegarNav(){
    if (this.claseNav === "nav-lista ocultar") {
      this.claseNav = "nav-lista visible"
    } else{
      this.claseNav = "nav-lista ocultar"
    }
  }

  constructor(private router: Router){}
  
  voyIngresar(){
    this.router.navigate(['/login']);
  }
}
