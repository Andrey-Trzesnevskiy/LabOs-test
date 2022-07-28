
import { Action, createReducer, on } from "@ngrx/store";
import { patientsActions } from "../actions/patients.actions";
import { IPatientModel } from "../models/types";



export const patientFeatureKey = 'patients';

export interface PatientState {
    isLoaded: boolean;
    patients: IPatientModel;
};

const ordersInitialState: PatientState = {
    isLoaded: false,
    patients: undefined,
};

const reducer = createReducer({... ordersInitialState},
    on(patientsActions.fetchPatients, (state) => ({isLoaded: false, patients: undefined})),
    on(patientsActions.updatePatients, (state, {entities}) => ({isLoaded: true, patients: entities})),
    on(patientsActions.markFavoritePatient, (state, {defaultId}) => {
        const patients: IPatientModel = JSON.parse(JSON.stringify(state.patients));
        for (const patient of patients.patient) {
            if (patient.defaultId === defaultId) {
                patient.isFavorite = true;
                break;
            }
        }
        return {
            isLoaded: true,
            patients
        }
    }),
    on(patientsActions.removeFavoritePatient, (state, {defaultId}) => {
        const patients: IPatientModel = JSON.parse(JSON.stringify(state.patients));
        for (const patient of patients.patient) {
            if (patient.defaultId === defaultId) {
                patient.isFavorite = false;
                break;
            }
        }
        return {
            isLoaded: true,
            patients
        }
    })
);

export function patientsReducer(state: PatientState, action: Action): PatientState {
    return reducer(state, action);
}