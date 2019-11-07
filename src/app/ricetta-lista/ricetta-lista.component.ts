import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ricetta-lista',
  templateUrl: './ricetta-lista.component.html',
  styleUrls: ['./ricetta-lista.component.scss']
})
export class RicettaListaComponent implements OnInit {

  ricette: Ricetta[];
  searchbar: boolean;

  constructor(private snackBar: MatSnackBar) {
    this.searchbar = false;
  }
