import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Order } from "app/shared/models/order.model";
import { OrdersFacade } from "app/store/orders/orders-facade.service";

import { ROUTE_ANIMATIONS_ELEMENTS } from "../../../core/core.module";

@Component({
  selector: "st-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  constructor(public ordersFacade: OrdersFacade) {}

  ngOnInit() {
    
  }

  public getOrders(): void {
    this.ordersFacade.fetchOrders();
  }

  public onOrderToFavorites(order: Order): void {
    this.ordersFacade.addToFavoritesOrder(order);
  }
}
