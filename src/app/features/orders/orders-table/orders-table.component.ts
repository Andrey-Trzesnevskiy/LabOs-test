import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Order } from 'app/shared/models/order.model';
import { IOrderModel } from 'app/store/orders/models/types';

@Component({
  selector: 'st-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersTableComponent implements OnInit {

  @Input() public orders: IOrderModel;
  @Output() public orderToFavorites: EventEmitter<Order> = new EventEmitter<Order>();

  constructor() { }

  ngOnInit(): void {
  }

  public addToFavorites(order: Order): void {
    this.orderToFavorites.emit(order);
  }

}
