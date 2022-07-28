import { createAction, props } from '@ngrx/store';
import { Patient } from 'app/shared/models/patient.model';

const addFavoritePatient = createAction('[Order] Add favorite patient', props<{entity: Patient}>());
const deleteFavoritePatient = createAction('[Order] Delete favorite patient', props<{defaultId: string}>());

export const favoritesPatientActions = {
    addFavoritePatient,
    deleteFavoritePatient
};