import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  private APIS = "http://localhost:8080/reservas";

  constructor(
    private httpClient: HttpClient
  ) { }
  public obtener(): Observable<any>{
    return this.httpClient.get(this.APIS);
  }

  public save(add: any): Observable<any>{
    debugger
    console.log(add)
    return this.httpClient.post(this.APIS + "/add", add);
  }

  public update(id:any): Observable<any>{
    return this.httpClient.put(this.APIS +"/id", id);
  }
  public delete (id:any): Observable<any>{
    return this.httpClient.delete(this.APIS + "/" + encodeURIComponent(id))
  }
}
