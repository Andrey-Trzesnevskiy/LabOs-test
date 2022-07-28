import { Action, createReducer, on } from "@ngrx/store";
import {favoritesOrderActions} from '../actions/favorite-order.actions';
import { Order } from "app/shared/models/order.model";

export const favoriteOrderFeatureKey = 'favoritesOrders';

export interface FavoriteOrderState {
    favoritesOrders: Order[];
};

const favoritesOrdersInitialState: FavoriteOrderState = {
    favoritesOrders: []
};

const reducer = createReducer({... favoritesOrdersInitialState},
    on(favoritesOrderActions.addFavoriteOrder, (state, {... entity}) => {
        const newState: FavoriteOrderState = JSON.parse(JSON.stringify(state));
        newState.favoritesOrders.push(entity.entity);
        return newState;
    }),
    on(favoritesOrderActions.deleteFavoriteOrder, (state, {identifier}) => {
        const newState: FavoriteOrderState = JSON.parse(JSON.stringify(state));
        newState.favoritesOrders = newState.favoritesOrders.filter(order => order.identifier !== identifier);
        return newState;
    })
);

export function favoritesOrdersReducer(state: FavoriteOrderState, action: Action): FavoriteOrderState {
    return reducer(state, action);
}