import { Ricetta } from './../models/ricetta';
import { RicettaQl } from './../models/ricetta-ql';
import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';

@Injectable({
  providedIn: 'root' // servo tutto i moduli del programma
})

export class PouchdbService implements RicettaQl {
  localDB: PouchDB;

  constructor() {
    this.localDB = new PouchDB('ricette');

    const remoteDB = new PouchDB('http://localhost:5984/ricette');

    this.localDB.sync(remoteDB, {live: true, retry: true}).on('change', change => {
      console.log('qualcosa è cambiato');
      console.log(change);
    }).on('paused', info => {
      console.log('in pausa, connesione persa');
      console.log(info);
    }).on('active', info => {
      console.log('collegamento ripristinato');
      console.log(info);
    }).on('error', error => {
      console.log('errore db');
      console.log(error);
    });

    this.localDB.info().then(info => {
       console.log(info);
     });
    remoteDB.info().then(info => {
       console.log(info);
     });
  }

  getRicetta(id: string): Promise<Ricetta> {
    return this.localDB.get(id);
  }
  fetchRicette(): Promise<Ricetta[]> {
    return this.localDB
      .allDocs({include_docs: true})
      .then(response => response.rows
      .map(item => item.doc));
  }

  private createRicetta(ricetta: Ricetta): Promise<any> {
    return this.localDB.post(ricetta);
  }
  private updateRicetta(ricetta: Ricetta): Promise<any> {
    return this.localDB.put(ricetta);
  }

  setRicetta(ricetta: Ricetta): Promise<any> {
    if (ricetta._id) {
      return this.updateRicetta(ricetta);
    } else {
      return this.createRicetta(ricetta);
    }
  }
}

