import { createFeatureSelector, createSelector } from "@ngrx/store";
import { patientFeatureKey, PatientState } from "../reducers/patients.reducer";

const patientsSelectorState = createFeatureSelector<PatientState>(patientFeatureKey);
const getPatients = createSelector(patientsSelectorState, (state) => state.patients)

export const patientsSelector = {
    getPatients
}