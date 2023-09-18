import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CitaShowComponent } from './pages/cita-show/cita-show.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Citas',
    },
  },

  {
    path: 'cita/:id',
    component: CitaShowComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitasRoutingModule {}

