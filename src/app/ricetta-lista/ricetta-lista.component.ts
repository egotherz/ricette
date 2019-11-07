import { Ricetta } from './models/ricetta';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-ricetta-lista',
  templateUrl: './ricetta-lista.component.html',
  styleUrls: ['./ricetta-lista.component.scss']
})
export class RicettaListaComponent implements OnInit {
  ricette: Ricetta[];

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

}
