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
    return this.http.get(this.baseURL + '/routes/' + id + '?fields[route]=direction_destinations');
  }

  getNextDeparture(route_id: string, stop_id: string, direction_id: string): Observable<any> {
    return this.http.get(this.baseURL + '/predictions?filter[route]' + route_id 
      + '&filter[stop]=' + stop_id 
      + '&filter[direction_id]=' + direction_id 
      + '&page[limit]=1');
  }
}
