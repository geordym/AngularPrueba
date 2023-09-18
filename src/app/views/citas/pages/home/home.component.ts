import { Component } from '@angular/core';
import { CitasService } from '../../services/citas.service';

@Component({
  selector: 'app-citas-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(public citasService: CitasService

    ){}
}
