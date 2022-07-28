import { createAction, props } from '@ngrx/store';
import { IPatientModel } from '../models/types';

const fetchPatients = createAction('[Patients] Fetch patients');
const markFavoritePatient = createAction('[Patients] Mark favorite patient', props<{defaultId: string}>());
const removeFavoritePatient = createAction('[Patients] Remove favorite patient', props<{defaultId: string}>());
const updatePatients = createAction('[Patients] Update patients', props<{entities: IPatientModel}>());

export const patientsActions = {
    fetchPatients,
    updatePatients,
    markFavoritePatient,
    removeFavoritePatient
}