import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medico } from '../interfaces/medico.interface';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  constructor(private http: HttpClient) {
    this.cargarMedicos();
  }



  private _tagsHistory: string[] = [];

  private _medicos: Medico[] = [];


  private serviceUrl: string = 'http://localhost:80/sistemamedicos/medicos.php';


  get medicos() {
    return [...this._medicos];
  }




  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    if (!localStorage.getItem('history')) return;

    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);

    if (this._tagsHistory.length === 0) return;
    // this.searchTag(this._tagsHistory[0]);

  }


  async cargarMedicos(): Promise<void> {


    const params = new HttpParams()
      .set('limit', '10')
      .set('q', 'asd');

    this.http.get<Medico[]>(`${this.serviceUrl}`, { params })
      .subscribe(resp => {

        this._medicos = resp;
      });


  }


  async eliminarMedico(id: number) {

    const params = new HttpParams()
      .set('id', id);

    // Define las cabeceras de la solicitud para indicar que se está enviando JSON
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    // Realiza la solicitud POST con el cuerpo JSON
    return this.http.delete<string>(`${this.serviceUrl}`, {params})
      .toPromise()
      .then(response => {
        // Aquí puedes manejar la respuesta si es necesario
        this.cargarMedicos();
        return response;
      })
      .catch(error => {
        // Aquí puedes manejar errores si es necesario
        throw error;
      });

  }

  async crearMedico(medico: Medico): Promise<any> {
    // Convierte el objeto 'medico' a una cadena JSON
    const medicoJSON = JSON.stringify(medico);

    // Define las cabeceras de la solicitud para indicar que se está enviando JSON
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    // Realiza la solicitud POST con el cuerpo JSON
    return this.http.post<string>(`${this.serviceUrl}`, medicoJSON, httpOptions)
      .toPromise()
      .then(response => {
        // Aquí puedes manejar la respuesta si es necesario
        this.cargarMedicos();
        return response;
      })
      .catch(error => {
        // Aquí puedes manejar errores si es necesario
        throw error;
      });

  }

  async editarMedico(medico: Medico): Promise<any> {
    // Convierte el objeto 'medico' a una cadena JSON
    const medicoJSON = JSON.stringify(medico);

    // Define las cabeceras de la solicitud para indicar que se está enviando JSON
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    // Realiza la solicitud POST con el cuerpo JSON
    return this.http.put<string>(`${this.serviceUrl}`, medicoJSON, httpOptions)
      .toPromise()
      .then(response => {
        // Aquí puedes manejar la respuesta si es necesario
        this.cargarMedicos();
        return response;
      })
      .catch(error => {
        // Aquí puedes manejar errores si es necesario
        throw error;
      });

  }





}
