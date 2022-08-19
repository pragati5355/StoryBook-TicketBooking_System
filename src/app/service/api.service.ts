import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http : HttpClient
    
  ) {}


  getMovie():Observable<any> {
    return this.http.get(`${environment.baseUrl}`);
  }

  getSingleMovie(id:any): Observable<any> {
    return this.http.get(`${environment.baseUrl + id}`);

  }


}
