import { Injectable } from '@angular/core';
import { PatientsApiService } from './patients-api.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {patientsActions} from './actions/patients.actions';
import { map, mergeMap } from 'rxjs/operators';
import { PatientAdapter } from './adapters/patient.adapter';

@Injectable({
  providedIn: 'root'
})
export class PatientsEffects {

  constructor(private actions$: Actions,
    private patientsApiService: PatientsApiService) { }

  public loadPatients$ = createEffect(() => this.actions$.pipe(
      ofType(patientsActions.fetchPatients),
      mergeMap(() => this.patientsApiService.fetchPatients()),
      map(entities => patientsActions.updatePatients({entities: new PatientAdapter(entities)})),
    )
  )
}
