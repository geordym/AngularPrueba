import { Component } from '@angular/core';
import { MedicosService } from 'src/app/views/medicos/services/medicos.service';
import { EgresosService } from '../../services/egresos.service';

@Component({
  selector: 'app-facturas-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(public egresosService: EgresosService ){}
}
