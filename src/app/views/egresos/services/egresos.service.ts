import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Egreso } from '../interfaces/egreso.interface';

@Injectable({ providedIn: 'root' })
export class EgresosService {



  constructor(private http: HttpClient) {

    this.cargarEgresos();
  }








  private _egresos: Egreso[] = [];


  private serviceUrl: string = 'http://localhost:80/sistemamedicos/egresos.php';


  get egresos() {
    return [...this._egresos];
  }





  filtrar(cadena: string) {

  }


  async cargarEgresos(): Promise<void> {


    const params = new HttpParams()
      .set('limit', '10')
      .set('q', 'asd');

    this.http.get<Egreso[]>(`${this.serviceUrl}`, { params })
      .subscribe(resp => {

        this._egresos = resp;
      });


  }


  async eliminarEgreso(id: number) {

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
        this.cargarEgresos();
        return response;
      })
      .catch(error => {
        // Aquí puedes manejar errores si es necesario
        throw error;
      });

  }

  async crearEgreso(egreso: Egreso): Promise<any> {
    // Convierte el objeto 'medico' a una cadena JSON
    const egresoJSON = JSON.stringify(egreso);

    // Define las cabeceras de la solicitud para indicar que se está enviando JSON
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    // Realiza la solicitud POST con el cuerpo JSON
    return this.http.post<string>(`${this.serviceUrl}`, egresoJSON, httpOptions)
      .toPromise()
      .then(response => {
        // Aquí puedes manejar la respuesta si es necesario
        this.cargarEgresos();
        return response;
      })
      .catch(error => {
        // Aquí puedes manejar errores si es necesario
        throw error;
      });

  }

  async editarFactura(cita: Egreso): Promise<any> {
    // Convierte el objeto 'medico' a una cadena JSON
    const citasJSON = JSON.stringify(cita);

    // Define las cabeceras de la solicitud para indicar que se está enviando JSON
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    // Realiza la solicitud POST con el cuerpo JSON
    return this.http.put<string>(`${this.serviceUrl}`, citasJSON, httpOptions)
      .toPromise()
      .then(response => {
        // Aquí puedes manejar la respuesta si es necesario
        this.cargarEgresos();
        return response;
      })
      .catch(error => {
        // Aquí puedes manejar errores si es necesario
        throw error;
      });

  }


}
