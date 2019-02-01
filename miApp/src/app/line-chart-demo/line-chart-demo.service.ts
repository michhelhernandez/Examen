import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
//import {RamosComponent} from './ramos/ramos.component';
import { RamosService } from './../ramos/ramos.service';



@Injectable()
export class LineChartDemoService {
  restRamos: any;

  constructor(private http: HttpClient, private RamosService: RamosService) { }
  getRestRamos(code:string, apiKey: string): void {
    this.ServicioRamos(code,apiKey)
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

    
    const url='https://api.sebastian.cl/academia/api/v1/rankings/years/{code}';

    return this.http 
      .get<any[]>(url,{headers})
      .pipe(map(data => data));
  }
}
