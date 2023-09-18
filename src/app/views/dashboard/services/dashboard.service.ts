import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Dashboard } from '../interfaces/dashboard.interface';
import { Observable, catchError, of } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class DashboardService {



  constructor(private http: HttpClient) {

  }




  private serviceUrl: string = 'http://localhost:80/sistemamedicos/dashboard.php';



  cargarDashboard(): Observable<Dashboard | null> {
    return this.http.get<Dashboard>(`${this.serviceUrl}`)
      .pipe(
        catchError(error => {
          return of(null);
        })
      );
  }



}
