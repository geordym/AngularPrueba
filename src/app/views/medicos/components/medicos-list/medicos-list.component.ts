import { Component, Input } from '@angular/core';
import { Medico } from '../../interfaces/medico.interface';
import { MedicosService } from '../../services/medicos.service';
import { IconSetService } from '@coreui/icons-angular';

import { cilListNumbered, cilPaperPlane, brandSet, freeSet } from '@coreui/icons';


@Component({
  selector: 'app-medicos-list',
  templateUrl: './medicos-list.component.html',
  styleUrls: ['./medicos-list.component.scss']
})
export class MedicosListComponent {


  icons = freeSet ;


  @Input()
  public medicos:Medico[] = [];

  constructor(public medicosService: MedicosService,  public iconSet: IconSetService){
    iconSet.icons = { cilListNumbered, cilPaperPlane, ...brandSet };

  }





}
