import { Ricetta } from './../models/ricetta';
import { RicettaQl } from './../models/ricetta-ql';
import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';

@Injectable({
  providedIn: 'root'
})
export class PouchdbService implements RicettaQl {
  localDB: PouchDB;

  constructor() {
    this.localDB = new PouchDB('plans');
    /*const remoteDB = new PouchDB('http://localhost:5984/plans');
    this.localDB
    .sync(remoteDB, {live: true, retry: true})
    .on('change', change => {
      console.log('qualcosaha cambiato');
      console.log(change);
    })
    .on('paused', info => {
      console.log('in pausaconnesione persa');
      console.log(info);
    })
    .on('active', info => {
      console.log('collegamento ripristinato');
      console.log(info);
    })
    .on('error', error => {
      console.log('errore db');
      console.log(error);
    });
   }*/

    // manda i dati del localDB alla console
    this.localDB.info().then(info => {
       console.log(info);
     });
    // remoteDB.info().then(info => {
    //   console.log(info);
    // });
  }

  getRicetta(id: string): Promise<Ricetta> {

  }
  fetchRicette(): Promise<Ricetta[]> {

  }
  setRicetta(ricetta: Ricetta): Promise<any> {

  }
  searchRicetta(tag: string): Promise<Ricetta> {

  }
}
