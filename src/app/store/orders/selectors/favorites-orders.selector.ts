import { createFeatureSelector, createSelector } from "@ngrx/store";
import { favoriteOrderFeatureKey, FavoriteOrderState } from "../reducers/favorite-order.reducer";

const favoritesOrderSelectorState = createFeatureSelector<FavoriteOrderState>(favoriteOrderFeatureKey);
const getFavoritesOrders = createSelector(favoritesOrderSelectorState, (state) => state?.favoritesOrders);

export const favoritesOrdersSelector = {
    getFavoritesOrders
}