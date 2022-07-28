import { createFeatureSelector, createSelector } from "@ngrx/store";
import { orderFeatureKey, OrderState } from "app/store/orders/reducers/order.reducer";

const orderSelectorState = createFeatureSelector<OrderState>(orderFeatureKey);
const getOrders = createSelector(orderSelectorState, (state) => state.orders)

export const ordersSelector = {
    getOrders
}