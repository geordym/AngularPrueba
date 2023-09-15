import { Injectable } from '@angular/core';
import { Factura } from '../interfaces/factura.interface';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class FacturasService {



  constructor(private http: HttpClient) {

    this.cargarFacturas();
  }








  private _facturas: Factura[] = [];


  private serviceUrl: string = 'http://localhost:80/sistemamedicos/facturas.php';


  get facturas() {
    return [...this._facturas];
  }





  filtrar(cadena: string) {

  }


  async cargarFacturas(): Promise<void> {


    const params = new HttpParams()
      .set('limit', '10')
      .set('q', 'asd');

    this.http.get<Factura[]>(`${this.serviceUrl}`, { params })
      .subscribe(resp => {

        this._facturas = resp;
      });


  }


  async eliminarFactura(id: number) {

    const params = new HttpParams()
      .set('id', id);

    // Define las cabeceras de la solicitud para indicar que se está enviando JSON
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    // Realiza la solicitud POST con el cuerpo JSON
    return this.http.delete<string>(`${this.serviceUrl}`, { params })
      .toPromise()
      .then(response => {
        // Aquí puedes manejar la respuesta si es necesario
        this.cargarFacturas();
        return response;
      })
      .catch(error => {
        // Aquí puedes manejar errores si es necesario
        throw error;
      });

  }

  async crearFactura(factura: Factura): Promise<any> {
    // Convierte el objeto 'medico' a una cadena JSON
    const facturaJSON = JSON.stringify(factura);

    // Define las cabeceras de la solicitud para indicar que se está enviando JSON
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    // Realiza la solicitud POST con el cuerpo JSON
    return this.http.post<string>(`${this.serviceUrl}`, facturaJSON, httpOptions)
      .toPromise()
      .then(response => {
        // Aquí puedes manejar la respuesta si es necesario
        this.cargarFacturas();
        return response;
      })
      .catch(error => {
        // Aquí puedes manejar errores si es necesario
        throw error;
      });

  }

  async editarFactura(factura: Factura): Promise<any> {
    // Convierte el objeto 'medico' a una cadena JSON
    const facturaJSON = JSON.stringify(factura);

    // Define las cabeceras de la solicitud para indicar que se está enviando JSON
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    // Realiza la solicitud POST con el cuerpo JSON
    return this.http.put<string>(`${this.serviceUrl}`, facturaJSON, httpOptions)
      .toPromise()
      .then(response => {
        // Aquí puedes manejar la respuesta si es necesario
        this.cargarFacturas();
        return response;
      })
      .catch(error => {
        // Aquí puedes manejar errores si es necesario
        throw error;
      });

  }


}
