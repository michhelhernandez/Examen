

import { Component, OnInit } from '@angular/core';
import { LineChartDemoService } from './line-chart-demo.service';
import { RamosService } from './../ramos/ramos.service';
//import * as chart_js from '../../chart.js';

@Component({
  selector: 'app-line-chart-demo',
  templateUrl: './line-chart-demo.component.html'
})
export class LineChartDemoComponent implements OnInit{
  notasPorAnio:number[]=[];
  anios: string[]=[];

  
  constructor(private LineChartDemoService:LineChartDemoService,private RamosService: RamosService) {
    var ramos = JSON.parse(localStorage.getItem('Ramos'));
    console.log(ramos);
  }
  
  // lineChart
  /*
  public lineChartData:Array<any> = [
    {data:this.notasPorAnio, label: 'Mis notas'},
  ];
  */
  public lineChartData: Array<any> = [
    {data: [60, 40, 10, 65, 56, 55, 40], label: 'Promedios de Notas'},
    
  ];
  /*
  public lineChartLabels:Array<any> = this.anios;
  public lineChartOptions:any = {
    responsive: true
  };
  */
  public lineChartLabels: Array<any> = ['2013', '2014', '2015', '2016', '2017', '2018', '2019'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  public randomize(): void {
    const _lineChartData: Array<any> = new Array(this.lineChartData.length);
    var nota = 1;
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        //_lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
        nota = Math.floor((Math.random() * 100) + 1);
        if (nota <=70 && nota >=10 ){
          _lineChartData[i].data[j]=nota;
        }else{
          nota = nota - 40;
          if (nota > 0){
            _lineChartData[i].data[j]=nota; 
          } else {
            _lineChartData[i].data[j]=45; 
          }
          
        }
        
      }
    }
    this.lineChartData = _lineChartData;
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
  ngOnInit() {
    var item=JSON.parse(localStorage.getItem('currentUser'));
    /*
      if(item.role=="Estudiante"){
        //this.GraficoEstudianteService.getRestRamos(item.rut, item.apiKey);// llama a los ramos por consola
        var ramos = JSON.parse(localStorage.getItem('Ramos'));
        //console.log(ramos);
      }
      else{
        console.log("pillo, pillo, pillo")
        console.log("https://www.youtube.com/watch?v=ABK9vgt8z9M")
        console.log("Usted no es estudiante")
      }
      */
      
    }
}

