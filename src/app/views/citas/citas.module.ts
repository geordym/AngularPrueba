import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { CitasRoutingModule } from './citas-routing.module';
import { CitasListComponent } from './components/citas-list/citas-list.component';
import { CitasService } from './services/citas.service';
import { CitasItemComponent } from './components/citas-item/citas-item.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CitaShowComponent } from './pages/cita-show/cita-show.component';




@NgModule({
  declarations: [

    CitasListComponent,
    HomeComponent,
    CitasItemComponent,
    SearchBoxComponent,
    CitaShowComponent,

  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule,
    CitasRoutingModule,
    FormsModule,
    ReactiveFormsModule, // Agrega ReactiveFormsModule a la lista de imports
    IconModule,

  ],
  exports: [
  ],
  providers: [
    CitasService,


  ]
})
export class CitasModule { }
