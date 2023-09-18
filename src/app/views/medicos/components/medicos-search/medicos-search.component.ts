import { Component } from '@angular/core';
import { MedicosService } from '../../services/medicos.service';

@Component({
  selector: 'app-medicos-search',
  templateUrl: './medicos-search.component.html',
  styleUrls: ['./medicos-search.component.scss']
})
export class MedicosSearchComponent {


  criteria: string = "";

  constructor(public medicosService: MedicosService){}


  buscarMedicos(){
    this.medicosService.cargarMedicosByCriteria(this.criteria);
  }

}
