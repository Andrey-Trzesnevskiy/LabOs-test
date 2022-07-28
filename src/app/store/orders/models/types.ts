import { Order } from "app/shared/models/order.model";

export interface IOrderModel {
    count: number;
    moreUncountedMatches: boolean;
    order: Order[];
    undisplayedMatches: boolean;
}