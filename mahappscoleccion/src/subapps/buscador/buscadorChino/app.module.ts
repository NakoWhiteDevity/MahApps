import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './componentes/main/main.component'
import { HttpClientModule } from '@angular/common/http';
import { PuntoschildComponent } from './componentes/main/puntoschild/puntoschild.component';
import { FiltradorComponent } from './componentes/main/filtrador/filtrador.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

export const APP_ROUTING: Routes = [
  { path:'',component:MainComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PuntoschildComponent,
    FiltradorComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
