import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  claseNav = "nav-lista ocultar";
  isLogged = false;
  desplegarNav(){
    if (this.claseNav === "nav-lista ocultar") {
      this.claseNav = "nav-lista visible"
    } else{
      this.claseNav = "nav-lista ocultar"
    }
  }

  constructor(private router: Router, private tokenService: TokenService){}
  
  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }
  
  voyIngresar(){
    this.router.navigate(['/login']);
  }

  toSobreMi(){
    document.getElementById("toSobremi").scrollIntoView({behavior:"smooth"})
  }
  toproyectos(){
    document.getElementById("toProyectos").scrollIntoView({behavior:"smooth"})
  }
  toEducacion(){
    document.getElementById("toEducacion").scrollIntoView({behavior:"smooth"})
  }
}
