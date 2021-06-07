import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ForinicioComponent } from './componentes/forinicio/forinicio.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { RepartesillasComponent } from './componentes/repartesillas/repartesillas.component';
import { LetreroComponent } from './componentes/letrero/letrero.component';
import { VientoPipe } from './tuberias/viento.pipe';
import { PosicionPipe } from './tuberias/posicion.pipe';
import { PuntosPipe } from './tuberias/puntos.pipe';
import { FormahjongComponent } from './componentes/formahjong/formahjong.component';
import { RidfinalPipe } from './tuberias/ridfinal.pipe';
import { FindejuegoComponent } from './componentes/findejuego/findejuego.component';
import { ReseteadorComponent } from './componentes/comun/reseteador/reseteador.component';

export const APP_ROUTING: Routes = [
  { path:'inicio',component:ForinicioComponent },
  { path:'sillas',component:RepartesillasComponent },
  { path:'letrero',component:LetreroComponent },
  { path:'tabla',component:FormahjongComponent },
  { path:'findejuego',component:FindejuegoComponent },
  { path: '', pathMatch: 'full', redirectTo : 'inicio' },
  { path: '**', pathMatch: 'full', redirectTo : 'inicio' }
];

@NgModule({
  declarations: [
    AppComponent,
    ForinicioComponent,
    RepartesillasComponent,
    LetreroComponent,
    VientoPipe,
    PosicionPipe,
    PuntosPipe,
    FormahjongComponent,
    RidfinalPipe,
    FindejuegoComponent,
    ReseteadorComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(APP_ROUTING),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
