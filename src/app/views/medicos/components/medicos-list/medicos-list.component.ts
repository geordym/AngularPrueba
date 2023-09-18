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


  icons = freeSet;




  constructor(public medicosService: MedicosService, public iconSet: IconSetService) {
    iconSet.icons = { cilListNumbered, cilPaperPlane, ...brandSet };

  }


  medicos: Medico[] = [];




  ngOnInit() {
    // Suscribirse al Observable para recibir actualizaciones
    this.medicosService.listaMedicos$.subscribe(medicos => {
      this.medicos = medicos;
      // Realiza cualquier acción necesaria cuando la lista de médicos se actualice
    });

    // Cargar médicos inicialmente
    this.medicosService.cargarMedicos();
  }




}
