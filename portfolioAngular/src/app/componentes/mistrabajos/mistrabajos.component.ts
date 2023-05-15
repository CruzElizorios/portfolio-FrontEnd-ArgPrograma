import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TrabajoModel } from 'src/app/models/trabajos.model';

@Component({
  selector: 'app-mistrabajos',
  templateUrl: './mistrabajos.component.html',
  styleUrls: ['./mistrabajos.component.css']
})
export class MistrabajosComponent {
  @Input() trabajosData: any;
  @Input() tienePermiso: any;
  @Output() trabajoRemove: EventEmitter<TrabajoModel> = new EventEmitter();

  deleteWork(workToDelete: TrabajoModel){
    console.log("eliminar", workToDelete);
    this.trabajoRemove.emit(workToDelete);
  }
}
