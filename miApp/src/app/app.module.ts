import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LineChartDemoComponent } from './line-chart-demo/line-chart-demo.component';
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';

//import { Component, OnInit } from '@angular/core';
import { LoginService } from './login/login.service';
import { UserService } from './user/user.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LineChartDemoService } from './line-chart-demo/line-chart-demo.service';
import {HomeService} from './home/home.service';
import {RamosComponent} from './ramos/ramos.component';
import { RamosService } from './ramos/ramos.service';





const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent }
  /*{ path: 'ramos', component: RamosComponent },
  { path: 'ramosp', component: RamospComponent },
  { path: 'home', component: HomeComponent },
  { path: 'homep', component: HomeProfesorComponent },
  { path: 'grafico', component: GraficoEstudianteComponent },
  { path: 'aviso', component: AvisoComponent },*/
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LineChartDemoComponent,
    LoginComponent,
    RamosComponent
  ],
  imports: [
    //Component,
    BrowserModule,
    ChartsModule,
    BrowserAnimationsModule,
    FormsModule,    
    MatInputModule, 
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    AppRoutingModule,
    HttpClientModule,
    //HttpClient,
    RouterModule.forRoot(routes)
  ],
  providers: [
    LoginService,
    UserService,
    LineChartDemoService,
    HomeService,
    RamosService
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
