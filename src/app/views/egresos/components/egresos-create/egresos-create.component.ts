import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EgresosService } from '../../services/egresos.service';


import { Egreso } from '../../interfaces/egreso.interface';

@Component({
  selector: 'app-egresos-create',
  templateUrl: './egresos-create.component.html',
  styleUrls: ['./egresos-create.component.scss']
})
export class EgresosCreateComponent {

  egresoForm: FormGroup;


  fechaActual: Date = new Date();


  @ViewChild('modalCrearMedico') modalCrearMedico!: ElementRef;
  constructor(private modalService: NgbModal, private fb: FormBuilder, private egresosService: EgresosService) {
    this.egresoForm = this.fb.group({
      fecha: ['', [Validators.required,
        Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)
      ]],
      descripcion: ['', Validators.required],
      metodo_pago: ['', Validators.required],
      precio_unitario: ['', Validators.required],
      cantidad: ['', Validators.required],
      total: [0], // Valor predeterminado para "Pagado"
    });

  }



  public seleccionado: any;


  imprimir() {
    console.log(this.egreso);
  }




  public total: number = 0;

  egreso: Egreso = {
    descripcion: "",
    metodo_pago: "",
    precio_unitario: 0,
    cantidad: 0,
    total: this.total,
    fecha: new Date()

  }



  guardarFactura() {
    this.egresosService.crearEgreso(this.egreso);
  }





  calcularTotal() {
    // Creas una copia de los valores de cantidad y precio_unitario
    const cantidad = this.egreso.cantidad;
    const precio_unitario = this.egreso.precio_unitario;

    // Realizas la multiplicación
    const total = cantidad * precio_unitario;

    this.total = total;
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
