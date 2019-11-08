import { RicettaListaComponent } from './ricetta-lista/ricetta-lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RicettaCercaComponent } from './ricetta-lista/ricetta-cerca/ricetta-cerca.component';
import { RicettaEditaComponent } from './ricetta-lista/ricetta-edita/ricetta-edita.component';
import { RicettaSingolaComponent } from './ricetta-lista/ricetta-singola/ricetta-singola.component';
import { RicettaSottoListaComponent } from './ricetta-lista/ricetta-sottolista/ricetta-sottolista.component';

const routes: Routes = [
  { path: 'ricetta-lista', component: RicettaListaComponent },
  { path: 'ricetta-lista/ricetta-sottolista', component: RicettaSottoListaComponent },
  { path: 'ricetta-lista/ricetta-edita/:id', component: RicettaEditaComponent },
  { path: 'ricetta-lista/:id', component: RicettaSingolaComponent },
  { path: 'ricetta-lista/ricetta-cerca', component: RicettaCercaComponent },
  { path: '', redirectTo: '/ricetta-lista', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
