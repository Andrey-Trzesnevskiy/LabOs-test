import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, mergeMap } from 'rxjs/operators';
import {orderActions} from './actions/order.actions';
import { OrdersApiService } from './orders-api.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersEffects {

  constructor(private actions$: Actions,
    private ordersApiService: OrdersApiService) { }

  public loadOrders$ = createEffect(() => this.actions$.pipe(
      ofType(orderActions.fetchOrders),
      mergeMap(() => this.ordersApiService.fetchOrders()),
      map(entities => orderActions.updateOrders({entities})),
    )
  )
}
