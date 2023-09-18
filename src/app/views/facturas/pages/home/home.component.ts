import { Component } from '@angular/core';
import { FacturasService } from '../../services/facturas.service';
import { CitasService } from '../../../citas/services/citas.service';
import { MedicosService } from 'src/app/views/medicos/services/medicos.service';

@Component({
  selector: 'app-facturas-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(public facturasService: FacturasService, public citasService: CitasService
   ,public medicosService : MedicosService
    ){}
}
