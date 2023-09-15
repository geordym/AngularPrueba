import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Factura } from '../../interfaces/factura.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FacturasService } from '../../services/facturas.service';

import { Cita } from '../../interfaces/cita.interface';
import { CitasService } from '../../services/citas.service';
import { Medico } from 'src/app/views/medicos/interfaces/medico.interface';

@Component({
  selector: 'app-facturas-create',
  templateUrl: './facturas-create.component.html',
  styleUrls: ['./facturas-create.component.scss']
})
export class FacturasCreateComponent {

  facturaForm: FormGroup;


  @ViewChild('modalCrearMedico') modalCrearMedico!: ElementRef;
  constructor(private modalService: NgbModal, private fb: FormBuilder, private facturasService: FacturasService) {
    this.facturaForm = this.fb.group({
      fecha: ['', Validators.required],
      nombre_cliente: ['', Validators.required],
      cedula: ['', Validators.required],
      especialidad: ['', Validators.required],
      cedula_medico: ['', Validators.required],
      estado: ['P'], // Valor predeterminado para "Pagado"
      precio: [0, [Validators.required, Validators.min(1)]]
    });

  }

  public seleccionado: any;


  imprimir(){
    console.log(this.factura);
  }



  @Input()
  medicos: Medico[] = [];


  factura: Factura = {
    id_cita: 0,
    fecha: "",
    nombre_cliente: "",
    cedula: 0,
    especialidad: "",
    cedula_medico: 0,
    estado: 'PP',
    precio: 0

  }

  guardarFactura() {
    this.facturasService.crearFactura(this.factura);
  }










  closeResult = '';


  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}
