import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './componentes/main/main.component';

//Buscadores:
  //China:
  import { AppModule as buscadorChina } from '../subapps/buscador/buscadorChino/app.module';
  import { APP_ROUTING as buscadorChinaRoutes } from '../subapps/buscador/buscadorChino/app.module';
  
//Letreros:
  //China
  import { AppModule as letreroChina } from '../subapps/letrero/LetreroChina/app.module';
  import { APP_ROUTING as letreroChinaRoute } from '../subapps/letrero/LetreroChina/app.module';


const APP_ROUTING: Routes = [
  { path:'' , component : MainComponent },
  { path:'buscadorChina' , children:buscadorChinaRoutes },
  { path:'letreroChina' , children:letreroChinaRoute },
];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    buscadorChina,
    letreroChina,
    RouterModule.forRoot(APP_ROUTING)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
