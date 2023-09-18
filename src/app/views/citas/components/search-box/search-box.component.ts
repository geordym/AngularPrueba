import { Component, OnInit } from '@angular/core';
import { CitasService } from '../../services/citas.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit{


  fecha = this.citasService.fecha;

  constructor(public citasService: CitasService) {

  }
  ngOnInit(): void {
    this.citasService.cargarCitas(this.fecha);

  }


  onDateInputChange(event: any){
    const newDateValue = event.target.value;
    this.citasService.fecha = newDateValue;
    this.citasService.cargarCitas(newDateValue);
  }

}
