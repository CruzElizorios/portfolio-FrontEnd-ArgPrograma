import { Injectable } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor(private ngxService: NgxUiLoaderService) { }
  
  public llamarspinner(){
    this.ngxService.start();
  }
  public detenerspinner(){
    this.ngxService.stop();
  }
}
