import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesOrdersTableComponent } from './favorites-orders-table.component';

describe('FavoritesOrdersTableComponent', () => {
  let component: FavoritesOrdersTableComponent;
  let fixture: ComponentFixture<FavoritesOrdersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritesOrdersTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesOrdersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
