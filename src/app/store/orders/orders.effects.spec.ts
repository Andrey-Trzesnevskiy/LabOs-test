import { TestBed } from '@angular/core/testing';

import { OrdersEffects } from './orders.effects';

describe('EffectsService', () => {
  let service: OrdersEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersEffects);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
