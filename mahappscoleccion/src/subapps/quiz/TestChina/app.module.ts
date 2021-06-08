import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './componentes/main/main.component';
import { SinpuntosComponent } from './componentes/cuestionarios/sinpuntos/sinpuntos.component';
import { SindescondescComponent } from './componentes/cuestionarios/sindescondesc/sindescondesc.component';
import { SindescComponent } from './componentes/cuestionarios/sindesc/sindesc.component';
import { SinfanComponent } from './componentes/cuestionarios/sinfan/sinfan.component';

export const APP_ROUTING: Routes = [
  { path:'',component:MainComponent }
];

@NgModule({
  declarations: [
    MainComponent,
    SinpuntosComponent,
    SindescondescComponent,
    SindescComponent,
    SinfanComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
