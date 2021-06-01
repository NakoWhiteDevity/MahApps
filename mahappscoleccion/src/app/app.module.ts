import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './componentes/main/main.component';


const APP_ROUTING: Routes = [
  { path:'' , component : MainComponent },
  { path: '', pathMatch: 'full', redirectTo : '' },
  { path: '**', pathMatch: 'full', redirectTo : '' }
];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(APP_ROUTING)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
