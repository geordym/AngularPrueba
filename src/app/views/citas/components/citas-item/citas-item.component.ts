import { Component, Input } from '@angular/core';
import { Cita } from '../../interfaces/cita.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-citas-item',
  templateUrl: './citas-item.component.html',
  styleUrls: ['./citas-item.component.scss']
})
export class CitasItemComponent {



  constructor(private router: Router) {}

  @Input()
  cita: Cita = {
    id_medico: 0,
    cedula: 0,
    nombre_cliente: '',
    cedula_medico_asignado: 0,
    edad: 0,
    estado: '',
    presion_arterial: 0,
    temperatura: 0,
    peso: 0,
    talla: '',
    fecha: new Date()
  }


  visualizarCita(id: number){
    this.router.navigate(['/citas/cita', id]);

  }

}
