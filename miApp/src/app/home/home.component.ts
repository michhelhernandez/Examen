import { Component, OnInit } from '@angular/core';
import {HomeService} from './home.service';
import {UserService} from './../user/user.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Ramo {
  value: number;
  nombre: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private HomeService:HomeService,private http: HttpClient ,private UserService:UserService) { 
    console.log('constructor load ramos');
    this.getSeeschweiler();  
  }
  getSeeschweiler(){
    console.log('getdata');
    this.http.get('https://api.sebastian.cl/academia/api/v1/courses/subjects').subscribe(data => {
      console.log(data);
    });
  }
  ramitos: Ramo[] = [
    {value: 0,nombre: "Computación Paralela"},
    {value: 1,nombre: "Calculo Diferencial"},
    {value: 2,nombre: "Electromagnetismo"},
    {value: 3,nombre: "Bases de Datos"},
    {value: 4,nombre: "Estructura de Datos"},
    {value: 5,nombre: "Estadística y Probabilidades"}
  ];


  ngOnInit() {
  }

}
