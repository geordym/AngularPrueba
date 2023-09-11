import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Medico } from '../../interfaces/medico.interface';
import { MedicosService } from '../../services/medicos.service';

@Component({
  selector: 'app-medicos-create',
  templateUrl: './medicos-create.component.html',
  styleUrls: ['./medicos-create.component.scss']
})

export class MedicosCreateComponent {



  @ViewChild('modalCrearMedico') modalCrearMedico!: ElementRef;
  constructor(private modalService: NgbModal, private formBuilder: FormBuilder, private medicosService: MedicosService) { }


  medico: Medico = {
    nombres: "",
    apellidos: "",
    telefono: 0,
    carrera: "",
    pais: ""

  }

  guardarMedico(){
    this.medicosService.crearMedico(this.medico);
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
