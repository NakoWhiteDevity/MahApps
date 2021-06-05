import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './componentes/main/main.component';
import { SinpuntosComponent } from './componentes/cuestionarios/sinpuntos/sinpuntos.component';
import { SindescondescComponent } from './componentes/cuestionarios/sindescondesc/sindescondesc.component';
import { SindescComponent } from './componentes/cuestionarios/sindesc/sindesc.component';
import { SinfanComponent } from './componentes/cuestionarios/sinfan/sinfan.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SinpuntosComponent,
    SindescondescComponent,
    SindescComponent,
    SinfanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
