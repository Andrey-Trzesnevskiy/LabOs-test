import { createAction, props } from '@ngrx/store';
import { Order } from 'app/shared/models/order.model';

const addFavoriteOrder = createAction('[Order] Add favorite order', props<{entity: Order}>());
const deleteFavoriteOrder = createAction('[Order] Delete favorite orders', props<{identifier: string}>());

export const favoritesOrderActions = {
    addFavoriteOrder,
    deleteFavoriteOrder
};