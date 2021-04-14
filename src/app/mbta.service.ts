import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MbtaService {

  baseURL = '​https://api-v3.mbta.com​';

  constructor(private http: HttpClient) { }

  getRoutes(): Observable<any> {
    return this.http.get(this.baseURL + '/routes?filter[type]=0,1&fields[route]=long_name');
  }

  getStops(id: string): Observable<any> {
    return this.http.get(this.baseURL + '/stops?filter[route]=' + id + '&fields[stop]=name');
  }

  getDirections(id: string): Observable<any> {
    return this.http.get(this.baseURL + '/routes/' + id + '?fields[route]=direction_names');
  }
}
