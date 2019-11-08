import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Ricetta } from './models/ricetta';
import { RicettaSottoListaComponent } from './ricetta-sottolista/ricetta-sottolista.component';

@Component({
  selector: 'app-ricetta-lista',
  templateUrl: './ricetta-lista.component.html',
  styleUrls: ['./ricetta-lista.component.scss']
})
export class RicettaListaComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) {
    this.searchbar = false;
  }

  ricette: Ricetta[];
  searchbar: boolean;
  routeSub: any;

  // searchText;
  // ricetta = [this.ricette];

  ngOnInit() {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
