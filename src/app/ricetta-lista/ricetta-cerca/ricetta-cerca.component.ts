import { RicettaListaComponent } from './../ricetta-lista.component';
import { MatSnackBar } from '@angular/material';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PouchdbService } from './../services/pouchdb.service';
import PouchDBfind from 'pouchdb-find';
import { Ricetta } from '../models/ricetta';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ricetta-cerca',
  templateUrl: './ricetta-cerca.component.html',
  styleUrls: ['./ricetta-cerca.component.scss']
})
export class RicettaCercaComponent implements OnInit, OnDestroy {

  private routeSub: Subscription;
  private cercaRicetta: string;
  private ricetta: Ricetta;
  public risultato = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private db: PouchdbService
  ) { }

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

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  cerca(tag) {

  }

}
