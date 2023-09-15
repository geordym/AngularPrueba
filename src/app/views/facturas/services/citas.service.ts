import { Injectable } from '@angular/core';
import { Cita } from '../interfaces/cita.interface';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CitasService {



  constructor(private http: HttpClient) {

    this.cargarCitas();
  }








  private _citas: Cita[] = [];


  private serviceUrl: string = 'http://localhost:80/sistemamedicos/citas.php';


  get citas() {
    return [...this._citas];
  }





  filtrar(cadena: string) {

  }


  async cargarCitas(): Promise<void> {


    const params = new HttpParams()
      .set('limit', '10')
      .set('q', 'asd');

    this.http.get<Cita[]>(`${this.serviceUrl}`, { params })
      .subscribe(resp => {

        this._citas = resp;
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
        this.cargarCitas();
        return response;
      })
      .catch(error => {
        // Aquí puedes manejar errores si es necesario
        throw error;
      });

  }

  async crearFactura(cita: Cita): Promise<any> {
    // Convierte el objeto 'medico' a una cadena JSON
    const citaJSON = JSON.stringify(cita);

    // Define las cabeceras de la solicitud para indicar que se está enviando JSON
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    // Realiza la solicitud POST con el cuerpo JSON
    return this.http.post<string>(`${this.serviceUrl}`, citaJSON, httpOptions)
      .toPromise()
      .then(response => {
        // Aquí puedes manejar la respuesta si es necesario
        this.cargarCitas();
        return response;
      })
      .catch(error => {
        // Aquí puedes manejar errores si es necesario
        throw error;
      });

  }

  async editarFactura(cita: Cita): Promise<any> {
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
        this.cargarCitas();
        return response;
      })
      .catch(error => {
        // Aquí puedes manejar errores si es necesario
        throw error;
      });

  }


}
