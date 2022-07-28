import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Patient } from 'app/shared/models/patient.model';

@Component({
  selector: 'st-favorites-patients-table',
  templateUrl: './favorites-patients-table.component.html',
  styleUrls: ['./favorites-patients-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesPatientsTableComponent implements OnInit {

  @Input() public favoritiesPatients: Patient[];
  @Output() public deleteFromFavorities: EventEmitter<string> = new EventEmitter<string>();
  public queryFilter: string;

  constructor() { }

  ngOnInit(): void {
  }

  public removeFromFavorites(patient: Patient): void {
    this.deleteFromFavorities.emit(patient.defaultId);
  }

}
