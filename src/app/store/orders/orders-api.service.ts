import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseApi } from 'app/shared/classes/base-api';
import { Observable } from 'rxjs';
import { IOrderModel } from './models/types';

@Injectable({
  providedIn: 'root'
})
export class OrdersApiService extends BaseApi {

  constructor(protected http: HttpClient) {
    super(http)
  }

  public fetchOrders(): Observable<IOrderModel> {
    return super.get('79fb05cb');
  }
}
