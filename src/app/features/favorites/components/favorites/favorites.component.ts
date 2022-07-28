import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { OrdersFacade } from 'app/store/orders/orders-facade.service';
import { PatientsFacadeService } from 'app/store/patients/patients-facade.service';

@Component({
  selector: 'st-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesComponent implements OnInit {

  constructor(public ordersFacade: OrdersFacade, public patientsFacade: PatientsFacadeService) { }

  ngOnInit(): void {

  }

  public onRemoveOrder(id: string): void {
    this.ordersFacade.deleteFavoritesOrder(id);
  }

  public onRemovePatient(id: string): void {
    this.patientsFacade.deleteFromFavoritesPatient(id);
  }

}
