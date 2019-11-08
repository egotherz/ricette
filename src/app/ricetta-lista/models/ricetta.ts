import { Step } from './step';

export class Ricetta {
  _id: string;
  _rev: string;

  constructor(
    public titolo: string = '',
    public materiali: string = '', // textarea
    public steps: Step[] = [new Step()]) {
  }
}
