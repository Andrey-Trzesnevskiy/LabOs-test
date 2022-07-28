import { createFeatureSelector, createSelector } from "@ngrx/store";
import { favoritePatientFeatureKey, FavoritePatientState } from "../reducers/favorities-patients.reducer";

const favoritesPatinetsSelectorState = createFeatureSelector<FavoritePatientState>(favoritePatientFeatureKey);
const getFavoritesPatients = createSelector(favoritesPatinetsSelectorState, (state) => state?.favoritesPatients);

export const favoritesPatientSelector = {
    getFavoritesPatients
}