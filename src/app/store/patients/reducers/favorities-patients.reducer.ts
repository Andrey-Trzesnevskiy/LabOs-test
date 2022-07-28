import { Action, createReducer, on } from "@ngrx/store";
import { Patient } from "app/shared/models/patient.model";
import { favoritesPatientActions } from '../actions/favorites-patients.actions';

export const favoritePatientFeatureKey = 'favoritesPatients';

export interface FavoritePatientState {
    favoritesPatients: Patient[];
};

const favoritesOrdersInitialState: FavoritePatientState = {
    favoritesPatients: []
};

const reducer = createReducer({... favoritesOrdersInitialState},
    on(favoritesPatientActions.addFavoritePatient, (state, {... entity}) => {
        const newState: FavoritePatientState = JSON.parse(JSON.stringify(state));
        newState.favoritesPatients.push(entity.entity);
        return newState;
    }),
    on(favoritesPatientActions.deleteFavoritePatient, (state, {defaultId}) => {
        const newState: FavoritePatientState = JSON.parse(JSON.stringify(state));
        newState.favoritesPatients = newState.favoritesPatients.filter(order => order.defaultId !== defaultId);
        return newState;
    })
);

export function favoritesPatientsReducer(state: FavoritePatientState, action: Action): FavoritePatientState {
    return reducer(state, action);
}