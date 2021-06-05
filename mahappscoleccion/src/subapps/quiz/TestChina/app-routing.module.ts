import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './componentes/main/main.component';

const APP_ROUTING: Routes = [
  { path:'inicio',component:MainComponent },
  { path: '', pathMatch: 'full', redirectTo : 'inicio' },
  { path: '**', pathMatch: 'full', redirectTo : 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTING)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
