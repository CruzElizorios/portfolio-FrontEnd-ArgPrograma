import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EducacionModel } from 'src/app/models/educacion-model';

@Component({
  selector: 'app-misestudios',
  templateUrl: './misestudios.component.html',
  styleUrls: ['./misestudios.component.css']
})
export class MisestudiosComponent {
  @Input() estudiosData: any;
  @Input() tienePermiso: any;
  @Output() estudioRemove: EventEmitter<EducacionModel> = new EventEmitter();

  deleteEducation(eduToDelete: EducacionModel){
    console.log("eliminar", eduToDelete);
    this.estudioRemove.emit(eduToDelete);
  }
}
