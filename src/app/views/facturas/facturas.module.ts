import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FacturasRoutingModule } from './facturas-routing.module';
import { FacturasListComponent } from './components/facturas-list/facturas-list.component';
import { FacturasCreateComponent } from './components/facturas-create/facturas-create.component';
import { FacturasSearchComponent } from './components/facturas-search/facturas-search.component';
import { FacturasUpdateComponent } from './components/facturas-update/facturas-update.component';
import { HomeComponent } from './pages/home/home.component';
import { FacturasService } from './services/facturas.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CitasService } from '../citas/services/citas.service';
import { MedicosService } from '../medicos/services/medicos.service';
import { IconModule, IconSetService } from '@coreui/icons-angular';



@NgModule({
  declarations: [
    FacturasListComponent,
    FacturasCreateComponent,
    FacturasSearchComponent,
    FacturasUpdateComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule,
    FacturasRoutingModule,
    FormsModule,
    ReactiveFormsModule, // Agrega ReactiveFormsModule a la lista de imports
    IconModule
  ],
  exports: [

  ],
  providers: [
    FacturasService,
    CitasService,
    MedicosService,
    IconSetService

  ]
})
export class FacturasModule { }
