import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Ricetta } from './models/ricetta';

@Component({
  selector: 'app-ricetta-lista',
  templateUrl: './ricetta-lista.component.html',
  styleUrls: ['./ricetta-lista.component.scss']
})
export class RicettaListaComponent implements OnInit {

  ricette: Ricetta[];
  searchbar: boolean;
  routeSub: any;

  constructor(private snackBar: MatSnackBar) {
    this.searchbar = false;
  }

  ngOnInit() {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
    this.db.searchRicetta(this.ricetta.tag).then(ricette => {
      console.log(ricette);
    }).catch(error => {
      console.error(error);
    });
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  }
