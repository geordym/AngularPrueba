import { Component, Input } from '@angular/core';
import { IconSetService } from '@coreui/icons-angular';
import { brandSet, cilListNumbered, cilPaperPlane, freeSet } from '@coreui/icons';
import { EgresosService } from '../../services/egresos.service';
import { Egreso } from '../../interfaces/egreso.interface';

@Component({
  selector: 'app-egresos-list',
  templateUrl: './egresos-list.component.html',
  styleUrls: ['./egresos-list.component.scss']
})
export class EgresosListComponent {


  icons = freeSet ;


  constructor(public egresosService: EgresosService,
    public iconSet: IconSetService) {

      iconSet.icons = { cilListNumbered, cilPaperPlane, ...brandSet };


     }

  @Input()
  public egresos: Egreso[] = [];




}
