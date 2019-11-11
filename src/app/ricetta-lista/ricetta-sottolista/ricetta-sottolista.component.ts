import { Ricetta } from './../models/ricetta';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';
import { PouchdbService } from '../services/pouchdb.service';
import { PouchDB } from 'pouchdb';

export interface RicettaElement {
  name: any;
  tag: any;
}

@Component({
  selector: 'app-ricetta-sottolista',
  templateUrl: './ricetta-sottolista.component.html',
  styleUrls: ['./ricetta-sottolista.component.scss']
})
export class RicettaSottoListaComponent implements OnInit, RicettaElement {
  name: string[];
  tag: string[];
  ricette: Ricetta[];
  ELEMENT_DATA: RicettaElement[] = [
    // { name: this.ricette, tag: this.ricette }
    {name: 'luca', tag: 'Lu'},
    {name: 'Jacopo', tag: 'Ja'},
    {name: 'Harlem', tag: 'Ha'}
  ];

  constructor(private db: PouchdbService, private snackBar: MatSnackBar) { }

  displayedColumns: string[] = ['name', 'tag'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

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

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
