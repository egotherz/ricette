import { ReactiveFormsModule } from '@angular/forms';
import { RicettaCercaComponent } from './ricetta-cerca/ricetta-cerca.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RicettaListaComponent } from './ricetta-lista.component';
import { RicettaEditaComponent } from './ricetta-edita/ricetta-edita.component';
import { RicettaSingolaComponent } from './ricetta-singola/ricetta-singola.component';
import { MatToolbarModule, MatStepperModule, MatInputModule, MatButtonModule, MatIconModule,
  MatListModule, MatSnackBarModule, MatExpansionModule, MatTooltipModule } from '@angular/material';
import { RicettaSottolistaComponent } from './ricetta-sottolista/ricetta-sottolista.component';


@NgModule({
  declarations: [
    RicettaListaComponent,
    RicettaEditaComponent,
    RicettaSingolaComponent,
    RicettaCercaComponent,
    RicettaSottolistaComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatTooltipModule,
    ReactiveFormsModule
  ],
  exports: [RicettaListaComponent]
})
export class RicettaListaModule { }
