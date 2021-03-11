import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindejuegoComponent } from './componentes/findejuego/findejuego.component';
import { ForinicioComponent } from './componentes/forinicio/forinicio.component';
import { FormahjongComponent } from './componentes/formahjong/formahjong.component';
import { LetreroComponent } from './componentes/letrero/letrero.component';
import { RepartesillasComponent } from './componentes/repartesillas/repartesillas.component';

const APP_ROUTING: Routes = [
  { path:'inicio',component:ForinicioComponent },
  { path:'sillas',component:RepartesillasComponent },
  { path:'letrero',component:LetreroComponent },
  { path:'tabla',component:FormahjongComponent },
  { path:'findejuego',component:FindejuegoComponent },
  { path: '', pathMatch: 'full', redirectTo : 'inicio' },
  { path: '**', pathMatch: 'full', redirectTo : 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTING)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
