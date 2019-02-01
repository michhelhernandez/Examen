import { Component, OnInit } from '@angular/core';
import { RamosService } from './ramos.service';

@Component({
  selector: 'app-ramos',
  templateUrl: './ramos.component.html',
  styleUrls: ['./ramos.component.css']
})
export class RamosComponent implements OnInit {

  ramos = [
    {id:1, nombre: 'algorito y programacion',  año:'2015', semestre:'2', nota:'4.2'},
    {id:2, nombre: 'calculo avanzado',  año:'2015', semestre:'2', nota:'5.2'},
    {id:3, nombre: 'algebra lineal',  año:'2015', semestre:'2', nota:'4.5'},
    {id:4, nombre: 'quimica',  año:'2015', semestre:'2', nota:'5.5'},
    {id:5, nombre: 'intrduccion a la ingenieria',  año:'2015', semestre:'2', nota:'2.2'},

  ]
  constructor(private ramosService: RamosService) { }

  ngOnInit() {
    var item=JSON.parse(localStorage.getItem('currentUser'));
    //console.log(item);
    if(item.role=="Estudiante"){
    //  this.ramosService.getRestRamos(item.rut, item.apiKey);
    var ramos = JSON.parse(localStorage.getItem('Ramos'));
      //console.log(ramos);
    }
    else {
      console.log("Usted no es estudiante")
    }
  }

}
