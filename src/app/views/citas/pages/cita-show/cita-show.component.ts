import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CitasService } from '../../services/citas.service';
import { Cita } from '../../interfaces/cita.interface';
import { switchMap } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cita-show',
  templateUrl: './cita-show.component.html',
  styleUrls: ['./cita-show.component.scss']
})
export class CitaShowComponent {

  formCita!: FormGroup;


  public cita?: Cita;


  constructor(private activatedRoute: ActivatedRoute,
    private router: Router, private citasService: CitasService,
    private fb: FormBuilder) {

    this.formCita = this.fb.group({
      nombre_cliente: ['', Validators.required],
      dni: ['', Validators.required],
      edad: ['', Validators.required],
      //servicio: ['', Validators.required],
      cedula_medico: [''], // Valor predeterminado para "Pagado"
      peso: [0, [Validators.required]],
      talla: [0, [Validators.required]],
      temperatura: [0, [Validators.required]],
      presion: [0, [Validators.required]],
      estado: ['0', [Validators.required]],


    });
  }



  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.citasService.cargarCitaPorId(id)),

      ).

      subscribe(cita => {

        if (!cita) return //this.router.navigateByUrl('');

        return this.cita = cita;

      });

  }



  test() {
    console.log(this.cita);
  }


  goToHome(){
    this.cita = undefined;
    this.router.navigateByUrl('/citas');
  }


  guardar(){
    this.citasService.editarCita(this.cita!);

    this.goToHome();
  }

}
