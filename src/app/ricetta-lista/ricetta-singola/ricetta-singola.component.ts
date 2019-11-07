import { Ricetta } from './../models/ricetta';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatVerticalStepper, MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { PouchdbService } from '../services/pouchdb.service';
import { StepperSelectionEvent } from '@angular/cdk/stepper';

@Component({
  selector: 'app-ricetta-singola',
  templateUrl: './ricetta-singola.component.html',
  styleUrls: ['./ricetta-singola.component.scss']
})
export class RicettaSingolaComponent implements OnInit, OnDestroy {
  ricetta: Ricetta;
  currentStepIndex: number;

  @ViewChild('stepper', {static: false}) stepper: MatVerticalStepper;
  private routeSub: Subscription;
  private stepSelezionato: boolean;

  constructor(
    private route: ActivatedRoute,
    private db: PouchdbService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((params: Params) => {
      this.db
      .getRicetta(params.id)
      .then(ricetta => {
        this.ricetta = ricetta;
        this.ngOnInit();
      })
      .catch(error => {
        console.error(error);
        this.snackBar.open('errore nel caricamento', 'Errore', {
          duration: 2000});
      });
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  init() {
    this.currentStepIndex = 0;
    this.stepSelezionato = false;
  }

  cliccato() {
    this.ricetta.steps[this.currentStepIndex].stato = true;
    this.stepSelezionato = true;
  }

  changSet(event: StepperSelectionEvent) {
    if (this.stepSelezionato) {
      return;
    }

    const previousStep = this.ricetta.steps[event.previouslySelectedIndex];
    const nextStep = this.ricetta.steps[event.selectedIndex];

    if (this.ricetta.steps[this.currentStepIndex].stato) {
      previousStep.stato = true;
      nextStep.stato = false;
    }

    this.currentStepIndex = event.selectedIndex;
  }

}
