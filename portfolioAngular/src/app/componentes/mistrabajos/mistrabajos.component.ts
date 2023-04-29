import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mistrabajos',
  templateUrl: './mistrabajos.component.html',
  styleUrls: ['./mistrabajos.component.css']
})
export class MistrabajosComponent {
  @Input() trabajosData: any;
}
