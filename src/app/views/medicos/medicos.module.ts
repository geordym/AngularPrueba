import { NgModule } from '@angular/core';
import { MedicosListComponent } from './components/medicos-list/medicos-list.component';
import { HomeComponent } from './pages/home/home.component';
import { MedicosRoutingModule } from './medicos-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MedicosService } from './services/medicos.service';
import { CommonModule } from '@angular/common';
import { MedicosCreateComponent } from './components/medicos-create/medicos-create.component';
import { MedicosUpdateComponent } from './components/medicos-update/medicos-update.component';
import { FormsModule } from '@angular/forms';
import { MedicosSearchComponent } from './components/medicos-search/medicos-search.component';
import { IconModule, IconSetService } from '@coreui/icons-angular';


@NgModule({
  imports: [
    CommonModule, // Agrega CommonModule a los imports
    HttpClientModule,
    MedicosRoutingModule,
    FormsModule,
    IconModule
  ],
  exports: [HomeComponent],
  declarations: [
    HomeComponent,
    MedicosListComponent,
    MedicosCreateComponent,
    MedicosUpdateComponent,
    MedicosSearchComponent
  ],
  providers: [
    MedicosService,
    IconSetService
  ],
})
export class MedicosModule { }
