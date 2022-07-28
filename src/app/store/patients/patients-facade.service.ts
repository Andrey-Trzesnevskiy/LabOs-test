import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Patient } from 'app/shared/models/patient.model';
import { favoritesPatientActions } from './actions/favorites-patients.actions';
import { patientsActions } from './actions/patients.actions';
import { favoritesPatientSelector } from './selectors/favorites-patients.selectors';
import {patientsSelector} from './selectors/patients.selector';

@Injectable({
  providedIn: 'root'
})
export class PatientsFacadeService {

  public patients$ = this.store$.pipe(select(patientsSelector.getPatients));
  public favoritiesPatients$ = this.store$.pipe(select(favoritesPatientSelector.getFavoritesPatients));

  constructor(private store$: Store) { }

  public fetchPatients(): void {
    this.store$.dispatch(patientsActions.fetchPatients());
  }

  public addToFavoritesPatient(entity: Patient): void {
    this.store$.dispatch(favoritesPatientActions.addFavoritePatient({entity}));
    this.store$.dispatch(patientsActions.markFavoritePatient({defaultId: entity.defaultId}));
  }

  public deleteFromFavoritesPatient(defaultId: string): void {
    this.store$.dispatch(favoritesPatientActions.deleteFavoritePatient({defaultId}));
    this.store$.dispatch(patientsActions.removeFavoritePatient({defaultId}));
  }
}
