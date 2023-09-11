import { Component, Input } from '@angular/core';
import { Medico } from '../../interfaces/medico.interface';
import { MedicosService } from '../../services/medicos.service';

@Component({
  selector: 'app-medicos-list',
  templateUrl: './medicos-list.component.html',
  styleUrls: ['./medicos-list.component.scss']
})
export class MedicosListComponent {


  @Input()
  public medicos:Medico[] = [];

  constructor(public medicosService: MedicosService){}



   cloneMedico(original: Medico): Medico {
    // Realiza una clonación manual de las propiedades del objeto original
    const clonedMedico: Medico = {
      id: original.id,
      nombres: original.nombres,
      apellidos: original.apellidos,
      telefono: original.telefono,
      carrera: original.carrera,
      pais: original.pais

      // Copia otras propiedades según sea necesario
    };
    return clonedMedico;
  }

}
