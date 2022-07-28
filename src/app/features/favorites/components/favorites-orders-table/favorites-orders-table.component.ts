import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Order } from 'app/shared/models/order.model';

@Component({
  selector: 'st-favorites-orders-table',
  templateUrl: './favorites-orders-table.component.html',
  styleUrls: ['./favorites-orders-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesOrdersTableComponent implements OnInit {

  @Input() public favoritesOrders: Order[];
  @Output() public removeOrder: EventEmitter<string> = new EventEmitter<string>();
  public queryFilter: string;

  constructor() { }

  ngOnInit(): void {
  }

  public removeFromFavorites(order: Order): void {
    this.removeOrder.emit(order.identifier);
  }

}
