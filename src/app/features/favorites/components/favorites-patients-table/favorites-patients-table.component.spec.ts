import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesPatientsTableComponent } from './favorites-patients-table.component';

describe('FavoritesPatientsTableComponent', () => {
  let component: FavoritesPatientsTableComponent;
  let fixture: ComponentFixture<FavoritesPatientsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritesPatientsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesPatientsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
