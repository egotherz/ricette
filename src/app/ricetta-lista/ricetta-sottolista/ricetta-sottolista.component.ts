import { Ricetta } from './../models/ricetta';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { PouchdbService } from '../services/pouchdb.service';
import { PouchDB } from 'pouchdb';

@Component({
  selector: 'app-ricetta-sottolista',
  templateUrl: './ricetta-sottolista.component.html',
  styleUrls: ['./ricetta-sottolista.component.scss']
})
export class RicettaSottoListaComponent implements OnInit {
  ricette: Ricetta[];

  constructor(private db: PouchdbService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.db.fetchRicette().then(ricette => {
      this.ricette = ricette;
    }).catch(error => {
      console.log(error);
      this.snackBar.open(
        'errore nel caricamento dati',
        null, {duration: 2000});
    });
  }

}
