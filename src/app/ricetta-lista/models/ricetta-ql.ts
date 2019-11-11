import { Ricetta } from './ricetta';
import { promise } from 'protractor';

export interface RicettaQl {
  getRicetta(id: string): Promise<Ricetta>;
  fetchRicette(): Promise<Ricetta[]>;
  setRicetta(ricetta: Ricetta): Promise<any>;
}
