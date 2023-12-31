import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MedicosService } from '../../services/medicos.service';
import { Medico } from '../../interfaces/medico.interface';
import { FormBuilder } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IconSetService } from '@coreui/icons-angular';
import { brandSet, cilListNumbered, cilPaperPlane, freeSet } from '@coreui/icons';

@Component({
  selector: 'app-medicos-update',
  templateUrl: './medicos-update.component.html',
  styleUrls: ['./medicos-update.component.scss']
})
export class MedicosUpdateComponent {



  icons = freeSet ;


  @ViewChild('modalCrearMedico') modalCrearMedico!: ElementRef;
  constructor(private modalService: NgbModal, private formBuilder: FormBuilder,
    private medicosService: MedicosService,
    public iconSet: IconSetService) {
      iconSet.icons = { cilListNumbered, cilPaperPlane, ...brandSet };

    }

  @Input()
  medico: Medico = {
    id: 0,
    nombres: "",
    apellidos: "",
    cedula: 0,
    telefono: 0,
    carrera: "",
    pais: ""

  }


  editarMedico(){
    console.log(this.medico);
    this.medicosService.editarMedico(this.medico);
  }






	closeResult = '';

  open(content) {
    console.log(this.medico);
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
