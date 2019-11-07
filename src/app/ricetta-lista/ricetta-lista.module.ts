import { RicettaListaComponent } from './ricetta-lista.component';
import { RicettaCercaComponent } from './ricetta-cerca/ricetta-cerca.component';
import { RicettaSingolaComponent } from './ricetta-singola/ricetta-singola.component';
import { RicettaEditaComponent } from './ricetta-edita/ricetta-edita.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { MatToolbarModule, MatStepperModule, MatInputModule, MatButtonModule, MatIconModule,
  MatListModule, MatSnackBarModule, MatExpansionModule, MatTooltipModule } from '@angular/material';

@NgModule({
  declarations: [RicettaListaComponent,
    RicettaCercaComponent,
    RicettaSingolaComponent,
    RicettaEditaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatTooltipModule
  ],
  exports: [RicettaListaComponent]
})
export class ModelsModule { }
