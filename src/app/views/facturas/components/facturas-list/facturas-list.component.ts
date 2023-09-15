import { Component, Input } from '@angular/core';
import { FacturasService } from '../../services/facturas.service';
import { Factura } from '../../interfaces/factura.interface';
import { Medico } from 'src/app/views/medicos/interfaces/medico.interface';
import { IconSetService } from '@coreui/icons-angular';
import { brandSet, cilListNumbered, cilPaperPlane, freeSet } from '@coreui/icons';

@Component({
  selector: 'app-facturas-list',
  templateUrl: './facturas-list.component.html',
  styleUrls: ['./facturas-list.component.scss']
})
export class FacturasListComponent {


  icons = freeSet ;


  constructor(public facturasService: FacturasService,
    public iconSet: IconSetService) {

      iconSet.icons = { cilListNumbered, cilPaperPlane, ...brandSet };


     }

  @Input()
  public facturas: Factura[] = [];

  @Input()
  public medicos: Medico[] = [];


}
