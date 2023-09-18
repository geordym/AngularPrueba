import { Component, Input } from '@angular/core';
import { Cita } from '../../interfaces/cita.interface';

@Component({
  selector: 'app-citas-list',
  templateUrl: './citas-list.component.html',
  styleUrls: ['./citas-list.component.scss']
})
export class CitasListComponent {


  constructor(){}


  @Input()
  citas:Cita[] = [];

}
