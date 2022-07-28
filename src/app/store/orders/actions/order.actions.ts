import { createAction, props } from '@ngrx/store';
import { IOrderModel } from '../models/types';

const fetchOrders = createAction('[Order] Fetch orders');
const updateOrders = createAction('[Order] Update orders', props<{entities: IOrderModel}>());
const markFavoriteOrder = createAction('[Order] Mark favorite order', props<{identifier: string}>());
const removeFavoriteOrder = createAction('[Order] Remove favorite order', props<{identifier: string}>());

export const orderActions = {
    fetchOrders,
    updateOrders,
    markFavoriteOrder,
    removeFavoriteOrder,
}