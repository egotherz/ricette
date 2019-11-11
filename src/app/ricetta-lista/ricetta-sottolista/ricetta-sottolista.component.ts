import { Ricetta } from './../models/ricetta';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';
import { PouchdbService } from '../services/pouchdb.service';
import { PouchDB } from 'pouchdb';

/* export interface RicettaElement {
  name: any;
} */

@Component({
  selector: 'app-ricetta-sottolista',
  templateUrl: './ricetta-sottolista.component.html',
  styleUrls: ['./ricetta-sottolista.component.scss']
})
export class RicettaSottoListaComponent implements OnInit {
  name: any;
  ricette: Ricetta[];

  recipes: Ricetta[];
  searchValue: string;
  displayedColumns: string[] = ['name'];
  // dataSource;
  // dataSource = new MatTableDataSource(this.ricetteLista);

  constructor(private db: PouchdbService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.db.fetchRicette().then(ricette => {
      this.ricette = ricette;
      console.log(this.ricette);
      this.recipes = ricette;
    }).catch(error => {
      console.log(error);
      this.snackBar.open(
        'errore nel caricamento dati',
        null, {duration: 2000});
    });
    /* this.ricetteLista = [
      { name: this.ricette }
    ];
    this.dataSource = new MatTableDataSource(this.ricetteLista);*/
  }

  get filter() {
    if (this.recipes && this.searchValue) {
      this.ricette = this.recipes.filter(item => item.titolo.includes(this.searchValue.trim()));
    } else {
      this.ricette = this.recipes;
    }
    return this.searchValue;
  }

  set filter(value) {
    this.searchValue = value;
  }

  // applyFilter(filterValue: string) {
    
    // this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

}
