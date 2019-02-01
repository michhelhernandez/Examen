import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class RamosService {

  restRamos: any;

//url http://138.68.23.14/api/v1/courses/students/189905548
// rut 189905548
// X-API-KEY       c3c0326a-e6d2-4646-bf2e-1d429245dc26


  constructor(private http: HttpClient) {
      
  }

  getRestRamos(rut:string, apiKey: string): void {
    this.ServicioRamos(rut,apiKey)
      .subscribe(
        restRamos => {
          this.restRamos = restRamos;
          console.log(this.restRamos);
        }
      )
  }
  ServicioRamos(rut: string, apiKey: string) {
    const headers= new HttpHeaders({
        "Content-Type":"*/*",
        "X-API-KEY":apiKey,
      })
    const url=`https://api.sebastian.cl/academia/api/v1/courses/students/${rut}`;
    
    return this.http 
      .get<any[]>(url,{headers})
      .pipe(map(data => data));
  }
}