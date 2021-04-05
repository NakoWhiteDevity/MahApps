import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './componentes/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { PuntoschildComponent } from './componentes/main/puntoschild/puntoschild.component';
import { FiltradorComponent } from './componentes/main/filtrador/filtrador.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PuntoschildComponent,
    FiltradorComponent,
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
