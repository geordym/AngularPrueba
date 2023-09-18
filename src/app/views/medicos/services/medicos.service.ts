import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medico } from '../interfaces/medico.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  constructor(private http: HttpClient) {
    this.cargarMedicos();
  }




  private _medicos: Medico[] = [];


  private serviceUrl: string = 'http://localhost:80/sistemamedicos/medicos.php';


  private listaMedicosSubject = new BehaviorSubject<Medico[]>([]);

  // Observable que los componentes pueden suscribirse para recibir actualizaciones
  listaMedicos$: Observable<Medico[]> = this.listaMedicosSubject.asObservable();


  get medicos() {
    return [...this._medicos];
  }

  async cargarMedicosByCriteria(criteria: string): Promise<void> {
    const params = new HttpParams().set('criterio', criteria);

    this.http.get<Medico[]>(`${this.serviceUrl}`, { params }).subscribe(resp => {
      this._medicos = resp;
      // Notificar a los componentes que la lista de médicos se ha actualizado
      this.listaMedicosSubject.next(this._medicos);
    });
  }

  async cargarMedicos(): Promise<void> {
    const params = new HttpParams().set('limit', '10').set('q', 'asd');

    this.http.get<Medico[]>(`${this.serviceUrl}`, { params }).subscribe(resp => {
      this._medicos = resp;
      // Notificar a los componentes que la lista de médicos se ha actualizado
      this.listaMedicosSubject.next(this._medicos);
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
    return this.http.delete<string>(`${this.serviceUrl}`, { params })
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
