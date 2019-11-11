import { Ricetta } from './../models/ricetta';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';
import { PouchdbService } from '../services/pouchdb.service';
import { PouchDB } from 'pouchdb';

export interface RicettaElement {
  name: any;
}

@Component({
  selector: 'app-ricetta-sottolista',
  templateUrl: './ricetta-sottolista.component.html',
  styleUrls: ['./ricetta-sottolista.component.scss']
})
export class RicettaSottoListaComponent implements OnInit, RicettaElement {
  name: any[];
  ricette: Ricetta[];
  ricetteLista = [
  { name: this.ricette },
  { name: 'aa' },
  { name: 'bb' },
  { name: 'cc' }
 ];

  constructor(private db: PouchdbService, private snackBar: MatSnackBar) { }
  displayedColumns: string[] = ['name'];
  dataSource = new MatTableDataSource(this.ricetteLista);

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
