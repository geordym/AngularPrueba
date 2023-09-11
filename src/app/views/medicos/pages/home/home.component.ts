import { Component } from '@angular/core';
import { MedicosService } from '../../services/medicos.service';

@Component({
  selector: 'app-medicos-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  constructor(public medicosService: MedicosService){}

}
