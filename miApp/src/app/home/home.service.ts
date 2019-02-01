import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  restRamos: any;

  constructor(private http: HttpClient) { 
    console.log('carga datos del constructor: ');
    //this.getSeeschweiler();
  }
  getSeeschweiler(){
    console.log('mitel getSeeschweiler: ');
    //
    /*
    var datos = this.http.get('https://api.sebastian.cl/academia/api/v1/courses/subjects').subscribe(data => {
      console.log('datos: ', datos);
    });
    */
  }


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

    //const url=`http://138.68.23.14/api/v1/courses/students/${rut}`;
    
    const url='https://api.sebastian.cl/academia/api/v1/courses/subjects';
    

    return this.http 
      .get<any[]>(url,{headers})
      .pipe(map(data => data));
  }
}
