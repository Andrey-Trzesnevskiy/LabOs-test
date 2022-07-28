import { Action, createReducer, on } from "@ngrx/store";
import { IOrderModel } from "../models/types";
import {orderActions} from '../actions/order.actions';


export const orderFeatureKey = 'orders';

export interface OrderState {
    isLoaded: boolean;
    orders: IOrderModel;
};

const ordersInitialState: OrderState = {
    isLoaded: false,
    orders: undefined,
};

const reducer = createReducer({... ordersInitialState},
    on(orderActions.fetchOrders, (state) => ({isLoaded: false, orders: undefined})),
    on(orderActions.updateOrders, (state, {entities}) => ({isLoaded: true, orders: entities})),
    on(orderActions.markFavoriteOrder, (state, {identifier}) => {
        const orders: IOrderModel = JSON.parse(JSON.stringify(state.orders));
        for (const order of orders.order) {
            if (order.identifier === identifier) {
                order.isFavorite = true;
                break;
            }
        }
        return {
            isLoaded: true,
            orders
        }
    }),
    on(orderActions.removeFavoriteOrder, (state, {identifier}) => {
        const orders: IOrderModel = JSON.parse(JSON.stringify(state.orders));
        for (const order of orders.order) {
            if (order.identifier === identifier) {
                order.isFavorite = false;
                break;
            }
        }
        return {
            isLoaded: true,
            orders
        }
    })
);

export function ordersReducer(state: OrderState, action: Action): OrderState {
    return reducer(state, action);
}