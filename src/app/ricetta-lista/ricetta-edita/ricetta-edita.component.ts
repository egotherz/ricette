import { PouchdbService } from './../services/pouchdb.service';
import { MatSnackBar } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Step } from '../models/step';
import { Ricetta } from '../models/ricetta';

@Component({
  selector: 'app-ricetta-edita',
  templateUrl: './ricetta-edita.component.html',
  styleUrls: ['./ricetta-edita.component.scss']
})
export class RicettaEditaComponent implements OnInit {
  form: FormGroup;
  private routeSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private db: PouchdbService
  ) { }

  ngOnInit() {
    this.init();
  }

  init() {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
    this.routeSub = this.route.params.subscribe((params: Params) => {
      if (params.id == 0) {
        this.createForm(new Ricetta());
      } else {
        this.db
        .getRicetta(params.id)
        .then((ricetta: Ricetta) => {
          this.createForm(ricetta);
        }).catch(error => {
          console.log(error);
          this.snackBar.open('Errore del DB', 'Errore', {duration: 2000});
        });
      }
    });
  }

  buildStep(step: Step = new Step()) {
    return this.formBuilder.group({
      titolo: [step.titolo || null, Validators.required],
      descrizione: [step.descrizione || null]
    });
  }

  createForm(ricetta: Ricetta) {
    const steps = ricetta.steps.map(step => this.buildStep(step));

    this.form = this.formBuilder.group({
      _id: [ricetta._id],
      _rev: [ricetta._rev],
      titolo: [ricetta.titolo],
      steps: this.formBuilder.array(steps)

    });
  }

  get steps() {
    return this.form.get('steps') as FormArray;
  }

  addStep() {
    this.steps.push(this.buildStep());
  }

  insertStep(index: number) {
    this.steps.insert(index, this.buildStep());
  }

  subtmitForm() {
    if (!this.form.valid) {
      return;
    }
    this.db.setRicetta(this.form.value)
    .then(response => {
      // this.form.value._rev = response.rev;
      this.snackBar.open('Salvataggio avvenuto con Successo', null, {
        duration: 2000
      });

      if (!this.form.value._id) {
        this.form.value._id = response.id;
        this.router.navigate([`/ricetta-lista/ricetta-edita/${response.id}`]);
      }
      this.init();
    })
    .catch(error => {
      this.snackBar.open('errore', 'Errore', {
        duration: 2000
      });
      console.error(error);
    });
  }

  drop(event) {
    const previousIndex = event.previousIndex;
    const currentIndex = event.currentIndex;
    const steps = this.steps;
    const step = steps.at(previousIndex);
    steps.removeAt(previousIndex);
    steps.insert(currentIndex, step);
  }
}
