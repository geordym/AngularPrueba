import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MedicosService } from '../medicos/services/medicos.service';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { EgresosService } from './services/egresos.service';
import { EgresosRoutingModule } from './egresos-routing.module';



import { EgresosCreateComponent } from './components/egresos-create/egresos-create.component';
import { EgresosListComponent } from './components/egresos-list/egresos-list.component';


@NgModule({
  declarations: [

    HomeComponent,
    EgresosCreateComponent,
    EgresosListComponent

  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule, // Agrega ReactiveFormsModule a la lista de imports
    IconModule,
    EgresosRoutingModule
  ],
  exports: [

  ],
  providers: [

    MedicosService,
    IconSetService,
    EgresosService

  ]
})
export class EgresosModule { }
