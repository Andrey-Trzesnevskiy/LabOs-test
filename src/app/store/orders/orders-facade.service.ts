import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Order } from 'app/shared/models/order.model';
import { Observable } from 'rxjs';
import { share, take } from 'rxjs/operators';
import { favoritesOrderActions } from './actions/favorite-order.actions';
import { orderActions } from './actions/order.actions';
import{ ordersSelector } from './selectors/order.selector';
import { favoritesOrdersSelector } from './selectors/favorites-orders.selector';

@Injectable({
  providedIn: 'root'
})
export class OrdersFacade {

  public orders$ = this.store$.pipe(select(ordersSelector.getOrders));
  public favoritesOrders$ = this.store$.pipe(select(favoritesOrdersSelector.getFavoritesOrders));

  constructor(private store$: Store) { }

  public fetchOrders(): void {
    this.store$.dispatch(orderActions.fetchOrders());
  }

  public addToFavoritesOrder(order: Order): void {
    this.store$.dispatch(favoritesOrderActions.addFavoriteOrder({entity: order}));
    this.store$.dispatch(orderActions.markFavoriteOrder({identifier: order.identifier}))
  }

  public deleteFavoritesOrder(identifier: string): void {
    this.store$.dispatch(favoritesOrderActions.deleteFavoriteOrder({identifier}));
    this.store$.dispatch(orderActions.removeFavoriteOrder({identifier}));
  }
}
