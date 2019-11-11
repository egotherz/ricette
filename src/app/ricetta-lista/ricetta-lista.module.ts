import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RicettaListaComponent } from './ricetta-lista.component';
import { RicettaEditaComponent } from './ricetta-edita/ricetta-edita.component';
import { RicettaSingolaComponent } from './ricetta-singola/ricetta-singola.component';
import { MatToolbarModule, MatStepperModule, MatInputModule, MatButtonModule, MatIconModule,
  MatListModule, MatSnackBarModule, MatExpansionModule, MatTooltipModule } from '@angular/material';
import { MatNativeDateModule } from '@angular/material';
import { MatTableModule } from '@angular/material';
import { RicettaSottoListaComponent } from './ricetta-sottolista/ricetta-sottolista.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    RicettaListaComponent,
    RicettaEditaComponent,
    RicettaSingolaComponent,
    RicettaSottoListaComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatToolbarModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatTooltipModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule
  ],
  exports: [
    RicettaListaComponent
  ]
})
export class RicettaListaModule { }
