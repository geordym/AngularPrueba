import { Component } from '@angular/core';
import { MedicosService } from '../../services/medicos.service';
import { Medico } from '../../interfaces/medico.interface';

@Component({
  selector: 'app-medicos-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  listaMedicos: Medico[] = [];


  constructor(public medicosService: MedicosService){}


  ngOnInit() {
    // Suscribirse al Observable para recibir actualizaciones
    this.medicosService.listaMedicos$.subscribe(medicos => {
      this.listaMedicos = medicos;
      // Realiza cualquier acción necesaria cuando la lista de médicos se actualice
    });

    // Cargar médicos inicialmente
    this.medicosService.cargarMedicos();
  }

}
